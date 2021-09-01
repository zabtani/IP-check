import React, { useCallback, useEffect, useRef, useState } from 'react';
import LogoSvg from './components/Search/LogoSvg';
import Result from './components/Result/Result';
import Search from './components/Search/Search';
import Examples from './components/Examples/Examples';
import classes from './App.module.css';
import { getIpData, getClientIp } from './api-helper';

const initialUserData = {
  country: null,
  ip: null,
  isDataOfClient: false,
  ready: null,
};
function App() {
  const [userData, setUserData] = useState(initialUserData);
  const [error, setError] = useState(false);
  const inputRef = useRef();

  const fetchIPdata = useCallback(async (ip, isDataOfClient) => {
    cleanSearchBar();
    setError(false);
    const ipData = await getIpData(ip);
    if (ipData.error) {
      setUserData(initialUserData);
      setError(ipData.error);
    } else {
      setUserData((prevState) => {
        return {
          ...prevState,
          ready: true,
          ip: ip,
          isDataOfClient: isDataOfClient,
          ...ipData.data,
        };
      });
    }
  }, []);
  const searchIpHandler = () => {
    fetchIPdata(inputRef.current.value, false);
  };
  const cleanSearchBar = () => {
    inputRef.current.value = '';
  };

  useEffect(() => {
    const checkMobile = () =>
      window.innerWidth <= 450 && window.innerHeight <= 800 ? true : false;
    const chooseUserIp = async () => {
      const userIp = await getClientIp();
      fetchIPdata(userIp, true);
    };
    const isMobile = checkMobile();
    isMobile
      ? setError(
          'We tried to locate your IP but you use a mobile device. this app support PC IP only. select one from the examples above or provide it via input.'
        )
      : chooseUserIp();
  }, [fetchIPdata]);
  return (
    <div className={classes.app}>
      <section>
        <div className={classes.title}>
          <h1>Check that </h1> <LogoSvg />
        </div>
        <Search search={searchIpHandler} ref={inputRef} />
        <Examples fetchExample={fetchIPdata} />
      </section>

      {userData.ready ? (
        <Result data={userData} />
      ) : (
        <section>
          <p>{error ? error : 'Loading IP Data..'}</p>
        </section>
      )}
    </div>
  );
}

export default App;
