import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import TodoContainer from './containers/TodoList/TodoContainer';
import TodoItemComponent from './containers/TodoList/TodoItemComponent';
import UsersContainer from './containers/Users/UsersContainer';

// Mansur components
import MansurPostsContainer from './containers/MansurPosts/MansurPosts';
import MansurPostsComp from './containers/MansurPosts/hooks/MansurPostsComp';


//Tima components
import TimaPostsContainer from './containers/TimaPosts/TimaPosts';
import TimaPostsComp from './containers/TimaPosts/hooks/TimaPostsComp';
import TimaUser from './containers/TimaUser/TimaUser.jsx'

//Gulzhan components
import GulzhanPostListContainer from './containers/GulzhanPosts/GulzhanPostListContainer'
import GulzhanPostsContainer from './containers/GulzhanPosts/GulzhanPostsContainer';


// Aijan components
import AijPostsContainer from './containers/AijPosts/AijPosts';


// Zamir components
import ZamirPostsContainer from './containers/ZamirPosts/ZamirPosts'


// Aisuluu components
import AisuluuUsers from './containers/AisuluuUsers/AisuluuUsers'


//Eliza components
import EllePostsComp from './containers/AijPosts/hooks/EllePostsComp'


import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="todo-list" element={<TodoContainer />} >
          <Route path=":itemId" element={<TodoItemComponent />} />
        </Route>
        <Route path="users" element={<UsersContainer/>} />
        <Route path="elle" element={<EllePostsComp/>}/>
        <Route path="aijposts" element={<AijPostsContainer/>} />
        <Route path="tima-posts" element={<TimaPostsContainer/>} />
        <Route path="mansur-posts" element={<MansurPostsContainer/>} />
        <Route path="zamir-posts" element={<ZamirPostsContainer/>} />
        <Route path="gulzhan-posts" element={<GulzhanPostListContainer/>} />
        <Route path="AisuluuUsers" element={<AisuluuUsers/>} />
        <Route path="TimaUser" element={<TimaUser/>} />

        <Route path="*" element={<div>NOT FOUND</div>  } />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
