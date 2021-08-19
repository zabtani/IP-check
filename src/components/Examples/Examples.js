import React from 'react';
import classes from './Examples.module.css';
const Examples = (props) => {
  const examples = [
    {
      state: 'Uruguay',
      ip: '200.108.241.198',
    },
    {
      state: 'Norway',
      ip: '92.42.70.36',
    },
    {
      state: 'Italy',
      ip: '2.16.135.255',
    },
    {
      state: 'Japan',
      ip: '1.21.255.255',
    },
    {
      state: 'Germany',
      ip: '2.16.23.0',
    },
    {
      state: 'Sweden',
      ip: '2.16.66.0',
    },
  ];

  return (
    <div className={classes.examples}>
      {examples.map((example) => (
        <button
          key={example.state}
          type="button"
          onClick={props.fetchExample.bind(this, example.ip, false)}
        >
          {`${example.state}/${example.ip}`}
        </button>
      ))}
    </div>
  );
};

export default Examples;
