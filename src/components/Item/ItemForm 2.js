import React from 'react'
import { Link } from 'react-router-dom'

const ItemForm = ({ item, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <h1>New Item</h1>
    <label>Category</label>
    <input
      placeholder='Enter a category, ex. Fruits, Veggies'
      /* This input's value, will always be book.title */
      value={item.category}
      /* We need to add a name prop, so this input will be properly updated
         in the future w/ handleChange */
      name='category'
      /* Add a change event handler, that will updated our book's state */
      onChange={handleChange}
    />

    <label>Product</label>
    <input
      placeholder='Enter an product, ex. Apple, Soy Milk'
      /* This input's value, will always be book.author */
      value={item.product}
      /* We need to add a name prop, so this input will be properly updated
         in the future w/ handleChange */
      name='product'
      /* Add a change event handler, that will updated our book's state */
      onChange={handleChange}
    />

    <label>Price</label>
    <input
      placeholder='Enter a price per item, ex. 1.50'
      /* This input's value, will always be book.author */
      value={item.price}
      /* We need to add a name prop, so this input will be properly updated
         in the future w/ handleChange */
      name='price'
      /* Add a change event handler, that will updated our book's state */
      onChange={handleChange}
    />

    <button type='submit'>Submit</button>
    {/* Link the cancel button to the home page route */}
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default ItemForm
