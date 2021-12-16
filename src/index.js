import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoContainer from './containers/TodoList/TodoContainer';
import TodoItemComponent from './containers/TodoList/TodoItemComponent';
import ZamirPostsContainer from './containers/ZamirPosts/ZamirPosts'
import UsersContainer from './containers/Users/UsersContainer';
import AijPostsContainer from './containers/AijPosts/AijPosts';
import GulzhanPostsContainer from './containers/GulzhanPosts/GulzhanPostsContainer';
import MansurPostsContainer from './containers/MansurPosts/MansurPosts';
import AisuluuUsers from './containers/AisuluuUsers/AisuluuUsers'
import GulzhanPostsComp from './containers/GulzhanPosts/hooks/GulzhanPostsComp'
import App from './App';

import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="todo-list" element={<TodoContainer />} >
          <Route path=":itemId" element={<TodoItemComponent />} />
        </Route>
        
        <Route path="users" element={<GulzhanPostsComp/>} />
        <Route path="aijposts" element={<AijPostsContainer/>} />
        <Route path="mansur-posts" element={<MansurPostsContainer/>} />
        <Route path="zamir-posts" element={<ZamirPostsContainer/>} />
        <Route path="gulzhan-posts" element={<GulzhanPostsContainer/>} />
        <Route path="AisuluuUsers" element={<AisuluuUsers/>} />

        <Route path="*" element={<div>NOT FOUND</div>  } />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
