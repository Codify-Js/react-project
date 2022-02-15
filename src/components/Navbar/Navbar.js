import React from "react";
import { Link } from "react-router-dom"
import { MenuItems } from "./MenuItems";
import { Container, Row, Col, Button, Badge} from 'react-bootstrap';
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
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
      </nav>
    );
  }
}

export default Navbar;
