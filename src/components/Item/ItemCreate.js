import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ItemForm from './ItemForm'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'

class ItemCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: {
        category: '',
        product: '',
        quantity: '',
        price: ''
      },
      createdId: null,
      updated: false
    }
  }

  handleChange = event => {
    event.persist()

    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedItem = Object.assign({}, prevState.item, updatedField)
      return { item: editedItem }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { msgAlert } = this.props
    axios({
      url: `${apiUrl}/items`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
      // url: `${apiUrl}/items`,
      // method: 'POST',
      // headers: {
      //   'Authorization': `Bearer ${this.props.user.token}`
      // },
      // data: { item: this.state.item }
    })
      .then(res => {
        const item = res.data.items.find((element) => {
          return element.product === this.state.item.product
        })
        if (item) {
          return axios({
            url: `${apiUrl}/items/${item._id}/update`,
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${this.props.user.token}`
            },
            data: { item: this.state.item }
          })
        } else {
          return axios({
            url: `${apiUrl}/items`,
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${this.props.user.token}`
            },
            data: { item: this.state.item }
          })
        }
      })
      .then((res) => {
        if (res.status === 201) {
          this.setState({ createdId: res.data.item._id })
        } else if (res.status === 204) {
          this.setState({ updated: true })
        }
      })
      .then((res) => {
        if (res.status === 420) {
          if (res.data.item.quantity < 0) {
            return msgAlert({
              heading: 'You can\'t have negative inventory 😱',
              message: messages.updateItemFailure,
              variant: 'danger'
            })
          // } else {
          //   return msgAlert({
          //     heading: '!',
          //     message: messages.updateItemFailure,
          //     variant: 'danger'
          //   })
          // }
          }
        }
      })
      .catch(console.error)

    // .then(res => this.setState({ createdId: res.data.item._id }))
    // .then(() => msgAlert({
    //   heading: 'Create Item Success',
    //   message: messages.createItemSuccess,
    //   variant: 'success'
    // }))
    // .catch(console.error)
    // .catch(error => {
    //   msgAlert({
    //     heading: 'Create Item Failure' + error.message,
    //     message: messages.createItemFailure,
    //     variant: 'danger'
    //   })
    // })
  }

  render () {
    const { item, createdId, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (createdId) {
      return <Redirect to={`/items/${createdId}`} />
    } else if (updated) {
      return <Redirect to={'/items'} />
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
