import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoContainer from './containers/TodoList/TodoContainer';
import TodoItemComponent from './containers/TodoList/TodoItemComponent';
import ZamirPostsContainer from './containers/ZamirPosts/ZamirPosts'
import AijPostsContainer from './containers/AijPosts/AijPosts';
import GulzhanPostsContainer from './containers/GulzhanPosts/GulzhanPostsContainer';
import MansurPostsContainer from './containers/MansurPosts/MansurPosts';
import AisuluuUsers from './containers/AisuluuUsers/AisuluuUsers'
import AisuluuPostsComp from './containers/AisuluuUsers/hooks/AisuluuPostsContainer'
import MansurPostsComp from './containers/MansurPosts/hooks/MansurPostsComp';
import AisuluusContainer from './containers/Users/AisuluusContainer';
import App from './App';
import './index.css';
import UsersContainer from './containers/Users/UsersContainer';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="todo-list" element={<TodoContainer />} >
          <Route path=":itemId" element={<TodoItemComponent />} />
        </Route>
        
        <Route path="users" element={<MansurPostsComp/>} />
        <Route path="aijposts" element={<AijPostsContainer/>} />
        <Route path="mansur-posts" element={<MansurPostsContainer/>} />
        <Route path="zamir-posts" element={<ZamirPostsContainer/>} />
        <Route path="gulzhan-posts" element={<GulzhanPostsContainer/>} />
        <Route path="AisuluuUsers" element={<AisuluuPostsComp/>} />
        <Route path="Users-list" element={<AisuluusContainer/>} />
        <Route path="*" element={<div>NOT FOUND</div>  } />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
