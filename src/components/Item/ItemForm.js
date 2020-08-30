import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

const ItemForm = ({ item, handleSubmit, handleChange, cancelPath }) => (

  <div className="updates">
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <h7>Item</h7><br/>
        <p> </p>
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" value={item.category} name='category' onChange={handleChange}>
          <option>Choose a category...</option>
          <option>Fruits 🍓</option>
          <option>Vegetables 🥬</option>
          <option>Proteins 🥜</option>
          <option>Bases 🥛</option>
          <option>Add-Ins 🍯</option>
          <option>Stock Items 🥤</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Product</Form.Label>
        <Form.Control type="text" placeholder="ex: apple, peanut butter" value={item.product} name='product' onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text" placeholder="ex: 2" value={item.quantity} name='quantity' onChange={handleChange}/>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect4">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="ex: 2.50" value={item.price} name='price' onChange={handleChange}/>
      </Form.Group>
      <button type='submit'>Submit</button>
      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link><br/>
      <h8>*All Fields Required.</h8>
    </Form>
  </div>
)
export default ItemForm
