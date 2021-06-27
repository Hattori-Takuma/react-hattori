import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';
import { Store } from '../store/index';
import { TODOS } from '../actions/index';




const ComponentA = () => {

  const [count, setCount] = useState(0);

  const { globalState, setGlobalState } = useContext(Store);

  const [data, setData] = useState()

  useEffect(() => {
    console.log('useEffect が呼び出されました。');
    axios.get('https://jsonplaceholder.typicode.com/todos')

      .then(res => {
        setGlobalState({
          type: TODOS,
          data: res.data


        });
        console.log(res)
        setData(res.data)
      })
  }, []);

  const increment = () => {
    setCount(count + 1);
    console.log(count)
  }





  return (
    <div>
      <div>
        ComponentA
    </div>
      <Link to="componentb">ComponentBへ移動</Link>
      <div>count : {count}</div>

      <Button variant="info" onClick={increment}>up</Button>{' '}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((d, index) => {

              return (
                <tr key={index}>
                  <td>{d.id}</td>
                  <td>{d.userId}</td>
                  <td>{d.title}</td>
                  <td>{d.completed.toString()}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>

    </div>
  );
};

export default ComponentA;
