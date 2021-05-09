import React, { useState } from 'react';
import './App.css';

function App() {
  const clickMe = () => {
    window.alert('Hello world')
  }

  const [name, setName] = useState('takuma');
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  const decrement = () => {
    setCount(count - 1);
    console.log(count);
  }
  const liset = () => {
    setCount(0);
    console.log(count)
  }
  const add = () => {
    setName(name + 'takuma')
    console.log(name);
  }






  return (
    <div>
      <button onClick={increment}>いいね！</button>
      <button onClick={decrement}>よくないね！</button>
      <button onClick={liset}>リセット</button>
      {count}

      <div>
        <button onClick={add}>add</button>
        {name}
      </div>

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

        </div>
      </div>
    </div>
  );
}









export default App;
