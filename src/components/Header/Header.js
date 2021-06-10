import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/portfolio-react">Surendra C Nettam</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/
                        ">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hover" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hover" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
