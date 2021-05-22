import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentA = () => {
  return (
    <>
      <div>
        ComponentA
    </div>
      <Button variant="primary">Hello world</Button>
      <Link to="componentb" >ConponentBへ移動</Link>

      <Table striped bordered hover>
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

      <div>
        <ul>
          <h1>Menu</h1>
          <li><Link to="/" >ページA</Link></li>
          <li><li><Link to="componentb" >ページB</Link></li></li>
          <li><li><Link to="componentc" >ページC</Link></li></li>
        </ul>
      </div>

    </>
  );
};

export default ComponentA
