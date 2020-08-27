import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

// Import axios so we can make HTTP requests
import axios from 'axios'

class Item extends Component {
  constructor (props) {
    // this makes sure that `this.props` is set in the constructor
    super(props)

    this.state = {
      // Initially, our item state will be null, until the API request finishes
      item: null,
      // initially this item has not been deleted yet
      deleted: false
    }
  }

  componentDidMount () {
    const { msgAlert } = this.props
    axios({
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { item: this.state.item }
    })
      .then(res => this.setState({ item: res.data.item }))
      .then(() => msgAlert({
        heading: 'Success!',
        message: messages.showItemSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Show Item Failed' + error.message,
          message: messages.showItemFailure,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  destroyItem = () => {
    const { msgAlert } = this.props
    axios({
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      // update the `deleted` state to be `true`
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Deleted Item Successfully',
        message: messages.deleteItemSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Delete Item Failure' + error.message,
          message: messages.deleteItemFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { item, deleted } = this.state

    if (!item) {
      return <p>Loading...</p>
    }

    // if the deleted state is true
    if (deleted) {
      // redirect to the home page
      return <Redirect to={{
        // Redirect to the home page ('/')
        pathname: '/items',
        // Pass along a message, in state, that we can show
        state: { msgAlert: 'Deleted item successfully' }
      }} />
    }

    return (
      <div>
        <h4>{item.category}</h4>
        <p>Product: {item.product}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${item.price}</p>
        <button onClick={this.destroyItem}>Delete Item</button>
        <Link to={`/items/${this.props.match.params.id}/update`}>
          <button>Update</button>
        </Link>
        <Link to='/items'>Back to all items 🍎</Link>
      </div>
    )
  }
}

export default Item
