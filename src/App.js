import React from 'react';
import './App.css';
import PostForm from "./PostForm"
import AllPosts from './AllPosts'

class App extends React.Component {
  

  render(){  
  return(
    <div className="App">
      <div className="navbar">
        <h2 className="center">Redux-CRUD</h2>
      </div>
      <PostForm />
      <AllPosts />
    </div>
  )
  }
}

export default App;
