
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Layout from '../shared/Layout'

// import the api's url
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

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
    const { msgAlert } = this.props
    axios({
      url: (`${apiUrl}/items`),
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(res => this.setState({ items: res.data.items }))
      .then(() => msgAlert({
        heading: 'Index Item Successfully',
        message: messages.indexItemSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Index Item Failed' + error.message,
          message: messages.indexItemFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const items = this.state.items.map(item => (
      <li key={item._id}>
        <Link to={`/items/${item._id}`}>
          {item.category}
        </Link>
      </li>
    ))
    // if (items === true) {
    //   return msgAlert({
    //     heading: 'Updated Item Successfully',
    //     message: messages.updateItemSuccess,
    //     variant: 'success'
    //   })
    // }
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


handleSubmit = event => {
  event.preventDefault()
  axios({
    url: `${apiUrl}/items`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    },
    data: { item: this.state.item }
  })
    .then(res => {
      if (res.data.item === true) {
        return axios({
          url: `${apiUrl}/items/${this.props.match.params.id}/update`,
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${this.props.user.token}`
          },
          data: { item: this.state.item }
        })
          .then(res => this.setState({ updated: true }))
          .catch(console.error)
      } else {

      }
    })
}
