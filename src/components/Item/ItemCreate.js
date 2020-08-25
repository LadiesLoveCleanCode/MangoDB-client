import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ItemForm from './ItemForm'
// import Layout from '../shared/Layout'

// import the api's url
import apiUrl from '../../apiConfig'

// Import axios so we can make HTTP requests
import axios from 'axios'

class ItemCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // Add some item state
      item: {
        // set the default title and author to empty strings
        category: '',
        product: '',
        price: ''
      },
      // Initially, the item has not been created, when it has been created, we will
      // keep track of the item's id, so we can redirect to it later
      createdId: null
    }
  }

  /* The handleChange event handler, will update our state, when an input's value changes */
  handleChange = event => {
    // by default react will re-use events after the event handler has finished running
    // the updater function we passed to setState will not be run until after handleChange has finished
    // when react re-uses event's, it sets event.target's properties to `null`
    // to prevent React from nullifying those properties, we call `event.persist`
    event.persist()

    // Updating our state will depend on the previous state, so we use the `updater`
    // callback, to get access to our previous state
    this.setState(prevState => {
      // Create an object that represents the change in state
      // event.target.name refers to the input that has changed's name, ex. 'title'
      // the new value, will come from `event.target.value`
      // ex. { title: 1984 }
      const updatedField = { [event.target.name]: event.target.value }

      // copy all of the book's properties onto the newly created object ({})
      // then copy the updated field onto that new object
      const editedItem = Object.assign({}, prevState.item, updatedField)

      console.log('updatedField is', updatedField)
      console.log('editedItem is', editedItem)

      // return the state change, of setting the `book` state to its new value of
      // `editedBook`
      return { item: editedItem }
    })
  }

  handleSubmit = event => {
    // prevent the page from refreshing
    event.preventDefault()

    axios({
      url: `${apiUrl}/items`,
      method: 'POST',
      // send the new value for our item, which comes from `this.state`
      data: { item: this.state.item }
    })
      // if we succesfully created the item, set the `createdId` state to the id
      // of the item we got back in the response's data
      .then(res => this.setState({ createdId: res.data.item._id }))
      .catch(console.error)
  }

  render () {
    // destructure book to show in the form below, and createdId to redirect
    const { item, createdId } = this.state
    const { handleChange, handleSubmit } = this

    // when the user hits submit to finish editing the book
    if (createdId) {
      // redirect to the show page (route)
      return <Redirect to={`/items/${createdId}`} />
    }

    return (
      <div>
        <ItemForm
          item={item}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath='/'
        />
      </div>
    )
  }
}

export default ItemCreate
