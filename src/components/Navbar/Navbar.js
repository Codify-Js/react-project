import React from 'react'
import { MenuItems} from "./MenuItems"
import './Navbar.css'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Logo</h1>
            <div className="menu-icon">
            </div>
            <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                            return (
                                <li className="nav-links" key={index}>
                                        <a className={item.cName} href={item.url}>
                                            {item.title}
                                        </a>
                                </li>
                    
                            )
                    })} 
                </ul>

            </nav>
        )
    }
}

export default Navbar