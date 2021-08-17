import React from 'react';
import classes from './Search.module.css';

const Search = React.forwardRef((props, ref) => {
  return (
    <div className={classes.search}>
      <input id="ip" type="text" placeholder="type IP here..." ref={ref} />
      <label htmlFor="ip"> type something like: 8.209.36.0 </label>
      <button type="button" onClick={props.search}>
        Search
      </button>
    </div>
  );
});

export default Search;
