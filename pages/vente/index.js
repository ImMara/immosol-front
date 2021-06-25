import React from 'react';
import Head from "../../components/head/Head";
import Cards from "../../components/cards/Cards";

function Index(props) {
    return (
        <>
            <Head/>
            <div className={"h-25 w-100 position-relative bg-dark"}>
                <img src="/images/vente.jpg" className="w-100 h-100 object-cover" alt=""/>
                <div className="position-absolute top-50 start-50 text-white text-easy" style={{transform:'translate(-50%,-50%)'}}>
                    <h2>Properties</h2>
                    <p>Home / Properties</p>
                </div>
            </div>

            <div className="container mb-3 pt-5">
                <div className='input-group'>
                    <input type="text" className="form-control"/>
                    <button className='btn btn-info text-white'> rechercher</button>
                </div>
                <div className='row g-2 mt-3 mb-3'>
                    <div className="col-12 col-md-3">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-3">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-3">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-3">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h1>Vente</h1>
                </div>
                <div className="row justify-content-center g-0">
                    <div className="card col-10 col-md-5 col-xl-3 m-3">
                        <Cards/>
                    </div>
                    <div className="card col-10 col-md-5 col-xl-3 m-3">
                        <Cards/>
                    </div>
                    <div className="card col-10 col-md-5 col-xl-3 m-3">
                        <Cards/>
                    </div>
                    <div className="card col-10 col-md-5 col-xl-3 m-3">
                        <Cards/>
                    </div>
                    <div className="card col-10 col-md-5 col-xl-3 m-3">
                        <Cards/>
                    </div>
                    <div className="card col-10 col-md-5 col-xl-3 m-3">
                        <Cards/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;