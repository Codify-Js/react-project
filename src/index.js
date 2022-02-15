import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';
import TodoContainer from './containers/TodoList/TodoContainer';
import TodoItemComponent from './containers/TodoList/TodoItemComponent';

import UseMemoContainer from './containers/Memo/UseMemoContainer';

// Mansur components
import MansurPostsContainer from './containers/MansurPosts/MansurPosts';
import MansurPostsComp from './containers/MansurPosts/hooks/MansurPostsComp';
import TodoListRedux from './containers/TodoWithRedux/TodoListRedux.jsx';

//Tima components
import TimaPostsContainer from './containers/TimaPosts/TimaPosts';
import TimaPostsComp from './containers/TimaPosts/hooks/TimaPostsComp';
import TimaUser from './containers/TimaUser/TimaUser.jsx'

//Gulzhan components
import GulzhanPostListContainer from './containers/GulzhanPosts/GulzhanPostListContainer'


// Aijan components
import AijPostsContainer from './containers/AijPosts/AijPosts';


// Zamir components
import ZamirPostsContainer from './containers/ZamirPosts/ZamirPosts'


// Aisuluu components
import AisuluuUsers from './containers/AisuluuUsers/AisuluuUsers'
import AisuluusContainer from './containers/AisuluuUsers/AisuluusContainer';
import AisuluuPostsComp from './containers/AisuluuUsers/hooks/AisuluuPostsContainer'

//Eliza components
import EllePostsComp from './containers/AijPosts/hooks/EllePostsComp'

import CrudPostsContainer from './containers/PostsCrud/CrudPostsContainer';
import ExamContainer from './containers/ExamTest/ExamContainer';

import TestForm from './containers/ExamTest/TestForm';
import './index.css';

ReactDOM.render(
 <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="todo-list" element={<TodoContainer />} >
          <Route path=":itemId" element={<TodoItemComponent />} />
        </Route>
        <Route path="new-posts" element={<CrudPostsContainer/>} />
        <Route path="new-questions" element={<TestForm/>} />
        <Route path="new-exam" element={<ExamContainer/>} />
        
        <Route path="memo" element={<UseMemoContainer/>} />
        <Route path="mansur-posts" element={<TodoListRedux/>} />
        <Route path="mansur-posts-hooks" element={<MansurPostsComp/>} />
          
        <Route path="elle" element={<EllePostsComp/>}/>
          
        <Route path="aijposts" element={<AijPostsContainer/>} />
          
        <Route path="tima-posts" element={<TimaPostsContainer/>} />
        <Route path="TimaUser" element={<TimaUser/>} />
          
        <Route path="zamir-posts" element={<ZamirPostsContainer/>} />
          
        <Route path="gulzhan-posts" element={<CrudPostsContainer/>} />
          
        <Route path="AisuluuUsers" element={<AisuluuUsers/>} />
        <Route path="Users-list" element={<AisuluusContainer/>} />

        <Route path="*" element={<div>NOT FOUND</div>  } />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
