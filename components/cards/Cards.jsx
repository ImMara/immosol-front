import React from 'react';

function Cards(props) {
    return (
        <>
                <div className={"position-relative"}>
                    <div className={"position-absolute top-0 start-0 d-flex"}>
                        <span className="badge bg-danger me-1">Featured</span>
                        <span className="badge bg-secondary me-1">Vente</span>
                    </div>

                    <img src="http://placekitten.com/200/100" className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">922 West Smoky Hollow St. Brooklyn, NY 11236</h5>
                    <div className={"row my-2"}>
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
                    <hr/>
                    <p>150 $</p>
                </div>
        </>
    );
}

export default Cards;