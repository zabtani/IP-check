import { createApi } from 'unsplash-js';
const unsplash = createApi({
  accessKey: '0oJhi_V8eHNlNtyOLjykytXjPWxFd79JZ7FWUduq0vk',
});
const defaultCountryImg =
  'https://www.globe.gov/o/gov.globe.home.explorelearnearth.web/images/learn-earth-system-clean.png';
export const getIpData = async (ip) => {
  let result = { error: false, data: null };
  try {
    const rawIpData = await fetch(
      `http://api.ipstack.com/${ip}?access_key=5c86b29e8d806a6ecc44b413f0b85c3e`
    );
    const ipData = await rawIpData.json();
    if (!ipData.country_name) {
      throw new Error();
    }
    const countryImg = await getImg(ipData.country_name);
    console.log(ipData);
    result.data = {
      flag: ipData.location.country_flag,
      img: countryImg,
      city: ipData.city,
      country: ipData.country_name,
      location: {
        latitude: ipData.latitude,
        longitude: ipData.longitude,
      },
    };
  } catch (e) {
    result.error = 'Sorry,no results fot this IP address.';
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
