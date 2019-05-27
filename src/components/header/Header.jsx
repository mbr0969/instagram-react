import React, {Component} from 'react';
//noinspection JSUnresolvedVariable
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';

export default class Header extends Component {

    render(){
        return(
            <header>
                <div className="container h-flex">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link className="menu_links" to="/"> Лента</Link>
                            </li>
                            <li>
                                <Link className="menu_links" to="/profile"> Профиль</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }

}