import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig'

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
    axios({
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { item: this.state.item }
    })
      .then(res => this.setState({ item: res.data.item }))
      .catch(console.error)
  }

  destroyItem = () => {
    axios({
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      // update the `deleted` state to be `true`
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
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
        pathname: '/',
        // Pass along a message, in state, that we can show
        state: { message: 'Deleted item successfully' }
      }} />
    }

    return (
      <div>
        <h4>{item.category}</h4>
        <p>Product: {item.product}</p>
        <p>Price: ${item.price}</p>
        <button onClick={this.destroyItem}>Delete Item</button>
        <Link to='/items'>Back to all items 🍎</Link>
      </div>
    )
  }
}

export default Item
