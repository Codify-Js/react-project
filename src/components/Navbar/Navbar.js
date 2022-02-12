import React from "react";
import { Link, useNavigate } from "react-router-dom"
import {useDispatch} from 'react-redux'
import { MenuItems } from "./MenuItems";
import { Container, Row, Col, Button, Badge} from 'react-bootstrap';
import "./Navbar.css";
import { setCurrentUser } from '../../store/actions/actions';

export default function Navbar() {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Logo</h1>
        <div className="menu-icon"></div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <Col sm={2} className="nav-links" key={index}>
                <Link className={item.cName} to={item.url}>{item.title}</Link>
              </Col>
            );
          })}
        </ul>
        <button onClick={() => {
          localStorage.setItem('token', null)
          dispatch(setCurrentUser(undefined))
          navigate('/login');
        }}>logout</button>
      </nav>
    );
}
