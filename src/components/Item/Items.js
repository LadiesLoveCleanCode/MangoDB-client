
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Layout from '../shared/Layout'

// import the api's url
import apiUrl from '../../apiConfig'

// Import axios so we can make HTTP requests
import axios from 'axios'

// This will be our Items Index component (show all books)
class Items extends Component {
  constructor (props) {
    super(props)

    // setup our initial state
    this.state = {
      // we have zero items, until our API request has finished
      items: []
      // deleted: false
    }
  }

  // this is called whenever our component is created and inserted
  // into the DOM (first appears)
  componentDidMount () {
    // make a GET request for all of the items
    axios({
      url: (`${apiUrl}/items`),
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(res => this.setState({ items: res.data.items }))
      .catch(console.error)
  }

  render () {
    const items = this.state.items.map(item => (
      <li key={item._id}>
        <Link to={`/items/${item._id}`}>
          {item.category}
        </Link>
      </li>
    ))

    return (
      // <Layout>
      <div>
        <h4>Items</h4>
        <ul>
          {items}
        </ul>
      </div>
      // </Layout>
    )
  }
}

export default Items
