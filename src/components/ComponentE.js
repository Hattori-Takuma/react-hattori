import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DECREMENT, RESET, BUTTON, TODOS } from '../actions/index';
import { Table, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentE = () => {
  const { globalState, setGlobalState } = useContext(Store);







  const handleClick = () => {
    setGlobalState({
      type: INCREMENT
    });
  };


  const handleClick2 = () => {
    setGlobalState({
      type: DECREMENT
    });
  };

  const handleClick3 = () => {
    setGlobalState({
      type: RESET
    });
  };

  const handleClick4 = () => {
    setGlobalState({
      type: BUTTON
    });
  };



  console.log(globalState);
  return (
    <div>
      <h1>ComponentE.js</h1>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleClick2}>-1</button>
      <button onClick={handleClick3}>reset</button>
      <button onClick={handleClick4}>button</button>



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
          {globalState.todos.map((d, index) => {


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

export default ComponentE;
