import React, { useState } from 'react';
import './App.css';

function App() {
  const clickMe = () => {
    window.alert('Hello world')
  }

  const name = 'takuma';
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };




  return (
    <div>
      <button onClick={increment}>いいね！</button>
      {count}




      <div>
        <button onClick={clickMe}>
          Hello World
       </button>
        <div>
          <h1>Hello world</h1>
          <h2>Hello world</h2>
          <h3>Hello world</h3>
          <h4>Hello world</h4>
          <button
            onClick={() => window.alert("Hello world")}>button</button>


          <input type="text" />
          <a href="#">a タグ</a>
          {name}
        </div>
      </div>
    </div>
  );
}









export default App;
