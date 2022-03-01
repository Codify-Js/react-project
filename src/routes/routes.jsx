import React, {useEffect} from 'react'

import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "../App";

import TodoContainer from "../containers/TodoList/TodoContainer";
import TodoItemComponent from "../containers/TodoList/TodoItemComponent";

import UseMemoContainer from "../containers/Memo/UseMemoContainer";

// Mansur components
import MansurPostsContainer from "../containers/MansurPosts/MansurPosts";
import MansurPostsComp from "../containers/MansurPosts/hooks/MansurPostsComp";
import TodoListRedux from "../containers/TodoWithRedux/TodoListRedux.jsx";

//Tima components
import TimaPostsContainer from "../containers/TimaPosts/TimaPosts";
import TimaPostsComp from "../containers/TimaPosts/hooks/TimaPostsComp";
import TimaUser from "../containers/TimaUser/TimaUser.jsx";

//Gulzhan components
import GulzhanPostListContainer from "../containers/GulzhanPosts/GulzhanPostListContainer";

// Aijan components
import AijPostsContainer from "../containers/AijPosts/AijPosts";

// Zamir components
import ZamirPostsContainer from "../containers/ZamirPosts/ZamirPosts";

// Aisuluu components
import AisuluuUsers from "../containers/AisuluuUsers/AisuluuUsers";
import AisuluusContainer from "../containers/AisuluuUsers/AisuluusContainer";
import AisuluuPostsComp from "../containers/AisuluuUsers/hooks/AisuluuPostsContainer";

//Eliza components
import EllePostsComp from "../containers/AijPosts/hooks/EllePostsComp";

import CrudPostsContainer from "../containers/PostsCrud/CrudPostsContainer";
import ExamContainer from "../containers/ExamTest/ExamContainer";

import TestForm from "../containers/ExamTest/TestForm";

import LoginForm from "../containers/LoginForm/login";
import SignUpForm from "../containers/LoginForm/signup";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../store/selectors/selectors";

import {useNavigate} from 'react-router-dom'
import CreateTestForm from '../containers/ExamTest/CreateTestForm';
import PaginationContainer from "../containers/Pagination/PaginationContainer";

export default function Routing() {
  const currentUser = useSelector(getCurrentUser);
  const navigate = useNavigate();

  const token = localStorage.getItem('token')

  console.log('currentUser', currentUser);
  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate('/login')
  //     localStorage.clear()
  //     return
  //   };
  //   const token = currentUser.token
  //   localStorage.setItem('token', currentUser.token)

  //   if (token) {
  //     navigate('/gulzhan-posts')
  //   } else {
  //     navigate('/login')
  //   }
  // }, [currentUser]);

  // useEffect(() => {
  //   if (token) {
  //     navigate('/gulzhan-posts')
  //   } else {
  //     navigate('/login')
  //   }
  // }, [token])

  return (
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignUpForm />} />

        <Route path="/" element={<App />}>
          <Route path="todo-list" element={<TodoContainer />}>
            <Route path=":itemId" element={<TodoItemComponent />} />
          </Route>
          <Route path="pagination" element={<PaginationContainer />} />
          <Route path="new-posts" element={<CrudPostsContainer />} />
          <Route path="new-questions" element={<TestForm />} />
          <Route path="new-exam" element={<CreateTestForm />} />

          <Route path="memo" element={<UseMemoContainer />} />
          <Route path="mansur-posts" element={<TodoListRedux />} />
          <Route path="mansur-posts-hooks" element={<MansurPostsComp />} />

          <Route path="elle" element={<EllePostsComp />} />

          <Route path="aijposts" element={<AijPostsContainer />} />

          <Route path="tima-posts" element={<TimaPostsContainer />} />
          <Route path="TimaUser" element={<TimaUser />} />

          <Route path="zamir-posts" element={<ZamirPostsContainer />} />

          <Route path="gulzhan-posts" element={<GulzhanPostListContainer />} />

          <Route path="AisuluuUsers" element={<AisuluuUsers />} />
          <Route path="Users-list" element={<AisuluusContainer />} />

          <Route path="*" element={<div>NOT FOUND</div>} />
        </Route>
      </Routes>
  );
}
