import { createApi } from 'unsplash-js';
const unsplash = createApi({
  accessKey: '0oJhi_V8eHNlNtyOLjykytXjPWxFd79JZ7FWUduq0vk',
});

const defaultCountryImg =
  'https://www.globe.gov/o/gov.globe.home.explorelearnearth.web/images/learn-earth-system-clean.png';
export const getIpData = async (ip) => {
  let result = { error: false, data: null };
  try {
    if (navigator.userAgentData.mobile) {
      throw new Error('mobile');
    }
    const rawIpData = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=8d8e8d860b914ac78cda85b380926ccb&ip=${ip}`
    );
    const ipData = await rawIpData.json();
    if (!ipData.country_name) {
      throw new Error();
    }
    const countryImg = await getImg(ipData.country_name);
    console.log(ipData);
    result.data = {
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
    result.error =
      e === 'mobile'
        ? 'App support PC IP only. Enjoy!'
        : 'Sorry,no results fot this IP address.';
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
