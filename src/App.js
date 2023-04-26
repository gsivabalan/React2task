//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function App() {
  const data = [
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      price: "$40.00 - $80.00",
      
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      price: "$20.00 $18.00",
      
      
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      price: "$50.00 $25.00",
      
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: "$40.00",
      
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      price: "$50.00 $25.00",
      
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      price: "$120.00 - $280.00",
      
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      price: "$20.00 $18.00",
      
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: "$40.00",
     
    },
  ]
 const [count, setCount]=useState(0)
  return (
    <div className="App">
      <Badge bg='success'>
      <button className='cart-value'>
        <i className='bi-cart-fill me-1'>Cart</i>
        
        <span className='badge bg-dark text-white ms-1 rounded-pill'>{count}</span>
      </button>
      </Badge>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                New Arrival
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   <div className='container px-4 px-lg-5 my-5'>
    <div className='text-center text-black'>
      <h1 className='display-4 fw-bolder'>Shop in style</h1>
   <p className='fw-normal text-black-50 mb-0'>
   With this shop hompeage template</p>
      <div className='card-container'>
      {data.map((product, Index)=>(
        <Product 
        key={Index} prod={product} count={count} setCount={setCount}/>
      ))}
      
      </div>
      </div>
      </div>
   </div>
     
    );
}; 
export default App;



function Product({prod, count, setCount}){
  console.log(prod);
  const [show, setshow]=useState(false)

  function addtoCart(){
    setCount(count+1);
    setshow(!show)
  }
  function removeCart(){
    setCount(count-1);
    setshow(!show)
  }
    
  return (
<div>
<Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src= {prod.productImage}/>
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>{prod.price}</Card.Text>
       
        
        {!show ?
        <Button variant="primary"onClick={addtoCart}>Add to Cart</Button> 
        :
        <Button variant="danger"onClick={removeCart}>Remove Cart</Button> }
      </Card.Body>
    </Card>
</div>
  )
}