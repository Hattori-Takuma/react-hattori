import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT } from '../actions/index';

const ComponentE = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const handleClick = () => {
    setGlobalState({
      type: INCREMENT
    });
  };
  console.log(globalState);
  return (
    <div>
      <h1>ComponentE.js</h1>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default ComponentE;
