import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import classes from './Map.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_API_KEY } from '../../api-config';
function Map(props) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 450,
  });
  useEffect(() => {
    setViewport((prevState) => {
      return {
        ...prevState,
        latitude: props.location.latitude,
        longitude: props.location.longitude,
        zoom: 9,
      };
    });
  }, [props.location]);

  const memoizedMarker = useCallback(() => {
    return (
      <Marker
        longitude={props.location.longitude}
        latitude={props.location.latitude}
      >
        <div className={classes.marker}></div> <b>{props.ip}</b>
      </Marker>
    );
  }, [props.location, props.ip]);

  return (
    <ReactMapGL
      scrollZoom={false}
      mapStyle="mapbox://styles/mapbox/outdoors-v9"
      mapboxApiAccessToken={MAPBOX_API_KEY}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {memoizedMarker()}
    </ReactMapGL>
  );
}

export default Map;
