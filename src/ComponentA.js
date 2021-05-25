import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const sampleArray = [
  { id: 1, name: 'aaa', date: 19920527 },
  { id: 2, name: 'bbb', date: 19920528 },
  { id: 3, name: 'ccc', date: 19920529 },
  { id: 4, name: 'ddd', date: 19920531 },
  { id: 5, name: 'eee', date: 19920501 }
];


const th = (data) => {
  console.log(data)
  return (


    <tr>
      <td >{data.id}</td>
      <td >{data.name}</td>
      <td >{data.date}</td>
    </tr>

  );
};




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
          <li><Link to="componentb" >ページB</Link></li>
          <li><Link to="componentc" >ページC</Link></li>
        </ul>


        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>







        <Table striped bordered hover>
          <thead>
            <tr　>
              <th>id</th>
              <th>name</th>
              <th>date</th>
              <th>#</th>
            </tr>
          </thead>

          {sampleArray.map((data) => {
            console.log(data);
            return <tbody>
              <tr>
                <td >{data.id}</td>
                <td >{data.name}</td>
                <td >{data.date}</td>
                <td>-</td>
              </tr>


            </tbody>
          })}
        </Table>







      </div>

    </>
  );
};

export default ComponentA
