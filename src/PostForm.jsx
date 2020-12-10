import React, { Component } from 'react';
import { connect } from 'react-redux'

class PostForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      post: ''
    }
    this.createPost = this.createPost.bind(this)
  }
  createPost(e){
    e.preventDefault();
    const data = {
      id: new Date(),
      title: this.state.title,
      post: this.state.post,
      editing: false
    }
    this.props.dispatch({
      type: 'ADD_POST',
      data
    })
    this.setState({ title: '' })
    this.setState({ post: '' })
    console.log(data)
  } 
render() {
return (
<div className="post-container">
  <h1 className="post-heading">Create Post</h1>
  <form className="form" onSubmit={this.createPost}>
   <input required value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} type="text" placeholder="Enter Post Title" /><br /><br />
   <textarea required value={this.state.post} onChange={(e) => this.setState({ post: e.target.value })} rows="5" cols="28" placeholder="Enter Post" /><br /><br />
   <button onClick={this.createPost}>Post</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);