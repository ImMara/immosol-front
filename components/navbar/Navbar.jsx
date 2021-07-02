import React from 'react';
import Link from 'next/link';

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand"><img src="/images/logo.png" style={{height:"35px"}} alt="logo"/></a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link active" aria-current="page" >Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/vente" passHref={true}>
                                    <a className="nav-link" >Vente</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/location" passHref={true}>
                                    <a className="nav-link" href="/location">Location</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/region">
                                    <a className="nav-link" >Région</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;