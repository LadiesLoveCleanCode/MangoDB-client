// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import ItemForm from './ItemForm'

// // import the api's url
// import apiUrl from '../../apiConfig'
// // import messages from '../AutoDismissAlert/messages'

// // Import axios so we can make HTTP requests
// import axios from 'axios'

// class ItemUpdate extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       item: {
//         category: '',
//         product: '',
//         quantity: '',
//         price: ''
//       },
//       updated: false
//     }
//   }

//   handleChange = event => {
//     event.persist()

//     this.setState(prevState => {
//       const updatedField = { [event.target.name]: event.target.value }

//       const editedItem = Object.assign({}, prevState.item, updatedField)

//       return { item: editedItem }
//     })
//   }

//   handleSubmit = event => {
//     // prevent the page from refreshing
//     event.preventDefault()
//     // const { msgAlert } = this.props
//     axios({
//       url: `${apiUrl}/items/${this.props.match.params.id}/update`,
//       method: 'PATCH',
//       headers: {
//         'Authorization': `Bearer ${this.props.user.token}`
//       },
//       data: { item: this.state.item }
//     })
//       // if we succesfully updated the book, set the `updated` state to `true` to cause a redirect
//       .then(res => this.setState({ updated: true }))
//       // .then(() => msgAlert({
//       //   heading: 'Updated Item Successfully',
//       //   message: messages.updateItemSuccess,
//       //   variant: 'success'
//       // }))
//       .catch(console.error)
//       // .catch(error => {
//       //   msgAlert({
//       //     heading: 'Updated Item Failed' + error.message,
//       //     message: messages.updateItemFailure,
//       //     variant: 'danger'
//       //   })
//       // })
//   }

//   render () {
//     const { item, updated } = this.state
//     const { handleChange, handleSubmit } = this

//     // when the user hits submit to finish editing the book
//     if (updated) {
//       // redirect to the show page (route)
//       return <Redirect to={`/items/${this.props.match.params.id}`} />
//     }

//     return (
//       <div>
//         <ItemForm
//           item={item}
//           handleChange={handleChange}
//           handleSubmit={handleSubmit}
//           cancelPath={`/items/${this.props.match.params.id}`}
//         />
//       </div>
//     )
//   }
// }

// export default ItemUpdate
