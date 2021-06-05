import React, { useState, useEffect, useReducer } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';
import reducer from '../reducers/index'


const initialCount = {
  count: 0
};





const ComponentC = () => {

  const [state, dispatch] = useReducer(reducer, initialCount);
  const increment = () => {
    console.log('increment');
    dispatch({
      type: 'INCREMENT'
    });
  };

  const decrement = () => {
    console.log('decrement');
    dispatch({
      type: 'DECREMENT'
    });
  };

  const reset = () => {
    console.log('reset');
    dispatch({
      type: 'RESET'
    });
  };



  const [data, setData] = useState()

  useEffect(() => {
    console.log('useEffect が呼び出されました。');




  })
  const getData = () => {

    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        console.log(res)
        setData(res.data)
      })
  }








  return (
    <div>
      <div>
        ComponentC
    </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <h1>
        {state.count}
      </h1>



      <Button variant="success" onClick={getData
      }>getData</Button>{' '}


      <Link to="/">ComponentAへ移動</Link>





      <Table striped bordered hover>
        <thead>
          <tr>
            <th>postId</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>

          </tr>
        </thead>
        <tbody>
          {
            data && data.map((d, index) => {

              return (
                <tr key={index}>
                  <td>{d.postId}</td>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.body.toString()}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>




    </div>
  );
};

export default ComponentC;