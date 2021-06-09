import React from 'react'
import { Image } from 'react-bootstrap';
import '../Header/Header.css';
import logo from '../images/mylogo.png';
import Navbar from '../Navbar/Navbar';
import '../Navbar/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <img className = "logo" src= {logo}  alt="Suri logo..."/>
                </section>
                <section className="header-top__navbar">
                    <section className="header-top__navigation">
                        <Navbar />
                    </section>

                </section>
            </section>
            </section>
    )
}

export default Header
