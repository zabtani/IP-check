import React, { useCallback, useEffect, useRef, useState } from 'react';
import LogoSvg from './components/Search/LogoSvg';
import Result from './components/Result/Result';
import Search from './components/Search/Search';
import Examples from './components/Examples/Examples';
import classes from './App.module.css';
import { getIpData } from './api-helper';

const initialUserData = {
  country: null,
  ip: null,
  isIpOfClient: false,
  ready: false,
};
function App() {
  const [userData, setUserData] = useState(initialUserData);
  const [error, setError] = useState(false);
  const inputRef = useRef();

  const fetchIPdata = useCallback(async (ip, isIpOfClient) => {
    cleanSearchBar();
    setUserData(initialUserData);
    setError(false);
    const ipData = await getIpData(ip, isIpOfClient);
    if (ipData.error) {
      setError(ipData.error);
    } else {
      setUserData((prevState) => {
        return {
          ...prevState,
          ready: true,
          ip: ip,
          isIpOfClient: isIpOfClient,
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
    fetchIPdata('', true);
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
