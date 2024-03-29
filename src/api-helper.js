import { createApi } from 'unsplash-js';
import { IPGEOLOCATION_API_KEY, UNSPLASH_API_KEY } from './api-config';
const unsplash = createApi({
  accessKey: UNSPLASH_API_KEY,
});

const defaultCountryImg =
  'https://www.globe.gov/o/gov.globe.home.explorelearnearth.web/images/learn-earth-system-clean.png';
export const getIpData = async (ip, isIpOfClient) => {
  let result = { error: false, data: null };
  let targetIp = ip;
  try {
    if (ip === '') {
      if (!isIpOfClient) {
        throw new Error('Please provide IP for the search bar');
      } else {
        targetIp = await getClientIp();
        console.log(targetIp);
      }
    }
    const rawIpData = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${IPGEOLOCATION_API_KEY}&ip=${ip}`
    );
    const ipData = await rawIpData.json();

    if (!ipData.country_name) {
      throw new Error('Sorry,no results for this IP address.');
    }
    const countryImg = await getImg(ipData.country_name);
    result.data = {
      ip: targetIp,
      flag: ipData.country_flag,
      img: countryImg,
      city: ipData.city,
      country: ipData.country_name,
      location: {
        latitude: ipData.latitude * 1,
        longitude: ipData.longitude * 1,
      },
    };
  } catch (e) {
    result.error = e.message;
  } finally {
    return result;
  }
};

const getImg = async (country) => {
  let result;
  try {
    const imgData = await unsplash.search.getPhotos({
      query: country,
    });
    result = imgData.response.results[0].urls.small;
  } catch {
    result = defaultCountryImg;
  }
  return result;
};

export const getClientIp = async () => {
  const rawUserIp = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
  let userIp = await rawUserIp.text();
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
  userIp = userIp.match(ipRegex)[0];
  return userIp;
};
