import React, { useContext } from 'react';
import { Store } from '../store/index';


const ComponentF = () => {
  const value = useContext(Store);
  return (
    <div>
      <h1>ComponentF.js</h1>

    </div>
  );
};

export default ComponentF;