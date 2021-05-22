import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
  const history = useHistory()
  const backPage = () => {
    history.push("/")
  }

  return (
    <div>
      <div>
        ComponentB
    </div>
      <Button onClick={backPage}>ホームへ戻る</Button>
      <Link to="componentc" >ConponentCへ移動</Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>



    </div>
  )
}

export default ComponentB