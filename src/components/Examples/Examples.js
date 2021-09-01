import React, { useState } from 'react';
import classes from './Examples.module.css';
const Examples = (props) => {
  const [examplesAreOpen, setExamplesAreOpen] = useState(false);
  const examplesButtonHandler = () => {
    setExamplesAreOpen((prevState) => {
      return !prevState;
    });
  };
  const examples = [
    {
      state: 'Your location',
      ip: '',
    },
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

  const buttonText = examplesAreOpen
    ? 'Fold IP examples'
    : 'Click to see IP examples';
  return (
    <div className={classes.examples}>
      <button
        className={classes.examplesButton}
        onClick={examplesButtonHandler}
      >
        {buttonText}
      </button>
      {examplesAreOpen && (
        <div className={classes.examplesCon}>
          {examples.map((example) => (
            <button
              key={example.state}
              type="button"
              onClick={props.fetchExample.bind(
                this,
                example.ip,
                example.ip === '' ? true : false
              )}
            >
              {`${example.state} ${example.ip}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Examples;
