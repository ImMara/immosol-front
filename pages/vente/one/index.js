import React from 'react';
import Head from "../../../components/head/Head";

function Index(props) {
    return (
        <>
            <Head/>
            <div className={"h-25 w-100 position-relative bg-dark"}>
                <img src="/images/vente.jpg" className="w-100 h-100 object-cover" alt=""/>
                <div className="position-absolute top-50 start-50 text-white text-easy" style={{transform:'translate(-50%,-50%)'}}>
                    <h2>Properties title</h2>
                    <p>*TYPE* / *REGION*</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2 className="mt-5">*PROPERTIES TITLE*</h2>
                        {/*tag*/}
                        <div className="d-flex my-1">
                            <span className="badge bg-danger mx-1 p-2">Featured</span>
                            <span className="badge bg-info mx-1 p-2">Avaiblable</span>
                            <span className="badge bg-info mx-1 p-2">*TYPE*</span>
                            <span className="badge bg-secondary mx-1 p-2"><i className="fas fa-parking"></i></span>
                            <span className="badge bg-secondary mx-1 p-2"><i className="fas fa-swimmer"></i></span>
                        </div>
                        {/*end tag*/}
                        <div className="row my-5 mx-3">
                            <div className={"col-6 text-secondary"}>
                                <i className="fas fa-bath me-2"/>
                                <span>2 bathroom</span>
                            </div>
                            <div className={"col-6 text-secondary"}>
                                <i className="fas fa-bed me-2"/>
                                <span>1 bed</span>
                            </div>
                            <div className="col-6 text-secondary">
                                <i className="fas fa-city me-2"/>
                                <span>maison</span>
                            </div>
                            <div className="col-6 text-secondary">
                                <i className="fas fa-border-style me-2"/>
                                <span>200m</span>
                            </div>
                        </div>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
    className="active" aria-current="true" aria-label="Slide 1"/>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
    aria-label="Slide 2"/>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
    aria-label="Slide 3"/>
                            </div>

                            <div className="carousel-inner ">
                                <div className="carousel-item active">
                                    <img src="/images/home.png" className="d-block h-100 w-100 object-cover" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/home.png" className="d-block w-100 object-cover" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/home.png" className="d-block h-100 w-100 object-cover" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 pt-1 d-flex flex-column">
                        <div className="mt-5 p-3 border border-2 border-info">
                            <h3 className="mb-3">Contact</h3>
                            <div className="row">
                                <p className="col-6"><i className="fas fa-user me-2"/>Mario letti</p>
                                <p className="col-6"><i className="fas fa-at me-2"/>mario@gmail.com</p>
                                <p className="col-6"><i className="fas fa-phone me-2"/>02/333 33 33</p>
                                <p className="col-6"><i className="fab fa-facebook me-2"/>facebook</p>
                            </div>
                        </div>
                        <div className="mt-5 px-3">
                            <h5 >Description : </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aut dolorem iure odit! Autem dolore expedita sapiente sint totam. Aspernatur, assumenda consequatur delectus dolore dolorem dolores exercitationem iusto maiores minima non, quibusdam tempore, unde?
                            </p>
                        </div>
                        <div className="mt-5 px-3">
                            <h5>Prix :</h5>
                            <h5 className="mt-3 text-info mx-3"><strong>5 000 000 $</strong></h5>
                        </div>

                    </div>
                    <div className="d-flex py-3">
                        <a className="btn btn-info text-white" href="/vente">Retour</a>
                        <a className="btn btn-secondary ms-2" href="/">Home</a>
                    </div>
                </div>
            </div>
        </>
);
}

export default Index;