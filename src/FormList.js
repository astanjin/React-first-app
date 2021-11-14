import React ,{useState,useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import {  Container, Row, Col, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'

export default function FormList() {
   const provinces =["Ontario","Manitoba","Quebec","Alberta","Britesh Columbia","Nova Scotia","Sascatchewan","Prince Edward Island"] 
  
   const [people, setPeople] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
    email: '',
    firstName: '',
    address: '',
    address2:'',
    city :'',
    province:'',
    postal:'',
    }
  );

   const readData = (event) =>{
    const name = event.target.name;
    const newValue = event.target.value;
    setPeople({[name]: newValue})
   } 
   const submitData =(event)=>{
     
    event.preventDefault();
    
   }
   return (
  <div>
   <Container >
     <Form  onSubmit={submitData}>
       <Row className="mb-3">
       <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name ="email" placeholder="Enter email" value={people.email}   onChange={readData}/>
    </Form.Group>
   
      
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" name ="firstName" placeholder="Name" value={people.firstName} onChange={readData} />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" type="text" name = "address" value={people.address} onChange={readData}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" type="text" name="address2" value={people.address2} onChange={readData}/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control  type = "text" name = "city" value = {people.city}onChange={readData}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Province</Form.Label>
      <Form.Select defaultValue="Choose..."  name="province" value ={people.province} onChange={readData}>
        <option>Choose...</option>
        {
          provinces.map(v => {
            return (<option value={v}>{v}</option>)
          })
        }
    
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control  type ="text" name = "postal" value = {people.postal}onChange={readData}/>
    </Form.Group>
  </Row>

  {/* <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

<Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 2, offset: 4 }}>
      <Form.Check label="Agree Condition?" />
    </Col>
  </Form.Group>

  <Button variant="primary" type="submit" onClick={submitData}>
    Submit
  </Button>
</Form>
<br/>
<div>
  <h4>Email : {people.email}</h4>
  <h4>Name : {people.firstName}</h4>
  <h4>Address : {people.address}</h4>
  <h4>City : {people.city}</h4>
  <h4>Province : {people.province}</h4>
  <h4>Poastal Code : {people.postal}</h4>
</div>
</Container> 
</div>
    )
}
