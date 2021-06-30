import React, {useState} from 'react';

function Cards(props) {

    const vente = props.data
    const name = props.name

    return (
        <>
                <div className={"position-relative"}>

                    <div className={"position-absolute top-0 start-0 d-flex"}>
                        {
                            vente.featured && (
                                <span className={"badge bg-danger rounded-0"}>Featured</span>
                            )
                        }
                        {
                            vente.sold ==='Vendus' ? (
                                <span className="badge bg-danger rounded-0">Vendus</span>
                            ):(
                                <span className="badge bg-info rounded-0">Disponible</span>
                            )
                        }
                    </div>

                    <img src={`http://vps-447d73c6.vps.ovh.net/images/${name}/gallery/`+vente.gallery[vente.image]} style={{height:"150px"}} className="card-img-top object-cover" alt="..."/>

                </div>
                <div className="card-body">

                    <h5 className="card-title text-info">{vente.title}</h5>

                    <div className={"row my-2"}>

                        <div className={"col-6 text-secondary"}>
                            <i className="fas fa-bath me-1"/>
                            <span style={{fontSize:"14px"}}>{vente.details.bathroom} bathroom</span>
                        </div>

                        <div className={"col-6 text-secondary"}>
                            <i className="fas fa-bed me-1"/>
                            <span style={{fontSize:"14px"}}>{ vente.details.bedroom===1 ? vente.details.bedroom+' chambre' : vente.details.bedroom+' chambres' }</span>
                        </div>

                        <div className="col-6 text-secondary">
                            <i className="fas fa-city me-1"/>
                            <span style={{fontSize:"14px"}}>{ vente.details.type}</span>
                        </div>

                        <div className="col-6 text-secondary">
                            <i className="fas fa-border-style me-1"/>
                            <span style={{fontSize:"14px"}}>{ vente.details.surface }m²</span>
                        </div>

                    </div>

                    <hr/>

                    <p className={"text-info"}><strong>{vente.cost} €</strong></p>

                </div>
        </>
    );
}

export default Cards;