import React from 'react';
import Map from '../Map/Map';
import classes from './Result.module.css';

const Result = (props) => {
  return (
    <div className={classes.resultsSections}>
      <section>
        <div className={classes.result}>
          <h2>
            Results for {props.data.isIpOfClient && ' Your IP'}
            {props.data.ip}
          </h2>
          <h3>
            {props.data.city} - {props.data.country}
          </h3>
          <img
            className={classes.flag}
            alt={props.data.country}
            src={props.data.flag}
          />
          <i>Random picture from {props.data.country}</i>
          <img alt={props.data.country} src={props.data.img} />
        </div>
      </section>

      <section>
        {props.data.ready && (
          <Map
            ip={props.data.ip}
            location={{
              latitude: props.data.location.latitude,
              longitude: props.data.location.longitude,
            }}
          />
        )}
      </section>
    </div>
  );
};

export default Result;
