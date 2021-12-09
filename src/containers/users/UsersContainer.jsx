import React from 'react'
import axios from 'axios';
import { render } from '@testing-library/react';

export default class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userList: [],
      activeUser: null,
      counter: 0,
      loading: false,
      posts: []
    }
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
    //Fetching from API
    this.setState({loading: true})
    setTimeout(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ userList: persons, loading: false });
      })  
      console.log('FOO');
    }, 0);

    console.log('RUN')
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (this.state.posts.length === 0) {
    //   return true
    // }

    // if (this.state.posts.length === nextState.posts.length) {
    //   return false
    // }

    return true
  }

  componentDidUpdate(prevState, state) {
    if (!state.activeUser || state.activeUser === this.state.activeUser) return;

    axios.get(`https://jsonplaceholder.typicode.com/users/${state.activeUser?.id}/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts});
      })  
  }

  componentWillUnmount() {
    console.log('COMPONENT UNMOUNT')
  }

  handleClick = (user) => {
    this.setState(state => ({
      counter: state.counter + 1,
      activeUser: user
    }))
  }

  render() {
    console.log('activeUser', this.state.activeUser);
    console.log('POSTS', this.state.posts);
    return (
      <>
        <h1>Users page</h1>
        <div>Some details</div>
        <div>Users: {this.state.userList.length}</div>
        <div>Posts: {this.state.posts.length}</div>
        <hr/>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            {!this.state.loading && this.state.userList.length === 0 && (<div>User list is empty</div>)}
            {
              !this.state.loading && (
                  this.state.userList.map(user => (
                    <div key={user.id} onClick={() => this.handleClick(user)}>
                      {user.name} :: {user.email}
                    </div>
                  )
                ) 
              )
            }
            {
              this.state.loading && (<div>Loading...</div>)
            }
          </div>
          <div>{this.state.posts.map(post => (
            <div key={post.id}>{post.id} :: {post.title}</div>
          ))}</div>
        </div>
      </>
    )
  }
}
