import React from 'react'
import {userList} from '../..Mock/mock';
import {render} from '@testing-library/react';
export default class UsersContainer extends React.Component{
    constructor(props){
       super(props);

       this.state={
        userList: userList()
        
       }
    
     
    }
    hangleClick = () => {

    }
    render() {
      console.log('this.state', this.state);
      return (
        <>
         <h1>Users page</h1>
      <div>Some details</div>
      {this.state.userList.map(user => <div onClick={}>{user.title}</div>)}
      </>
      )
    })
   
}
}
export default UsersContainer