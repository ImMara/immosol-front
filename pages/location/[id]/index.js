import React from 'react';
import Head from "../../../components/head/Head";
import Carousel from "../../../components/carousel/Carousel";
import {getLocation} from "../../../actions";
import {useRouter} from "next/router";
import Link from "next/link";

function Index(props) {
    const router = useRouter()
    const {id} = router.query

    const {location} = props

    return (
        <>

            <Head title={`immosol/location/${location.title}`}/>

            <div className={"h-50 w-100 position-relative bg-dark"}>
                <img src={"https://marastudio.xyz/images/locations/gallery/" + location.gallery[location.image]}
                     className={"object-cover h-100 w-100"} alt="..."/>
                <div className="position-absolute top-50 start-50 text-white text-easy-strong text-center"
                     style={{transform: 'translate(-50%,-50%)'}}>
                    <h2>{location.title}</h2>
                    <p>{location.details.type + "/" + location.zip}</p>
                </div>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-12 col-lg-6">

                        <h2 className="mt-5 text-capitalize">{location.title}</h2>

                        <div className="d-flex my-1">
                            {
                                location.featured && (
                                    <span className="badge bg-danger mx-1 p-2">Featured</span>
                                )
                            }
                            {
                                location.sold === "Disponible" ? (
                                    <span className="badge bg-info mx-1 p-2">Disponible</span>
                                ) : (
                                    <span className="badge bg-danger mx-1 p-2">Vendu</span>
                                )
                            }
                            <span className="badge bg-info mx-1 p-2">{location.type}</span>
                            {
                                location.details.parking && (
                                    <span className="badge bg-secondary mx-1 p-2"><i className="fas fa-parking"/></span>
                                )
                            }
                            {
                                location.details.pool && (
                                    <span className="badge bg-secondary mx-1 p-2"><i className="fas fa-swimmer"/></span>
                                )
                            }
                            {
                                location.details.kitchen && (
                                    <span className="badge bg-secondary mx-1 p-2"><i
                                        className="fas fa-utensils"/></span>
                                )
                            }
                        </div>

                        <div className="row my-5 mx-3">
                            {
                                location.details.bathroom &&
                                (
                                    <div className={"col-6 text-secondary"}>
                                        <i className="fas fa-bath me-2"/>
                                        <span>{location.details.bathroom} salle de bain</span>
                                    </div>
                                )
                            }
                            {
                                location.details.bedroom &&
                                (
                                    <div className={"col-6 text-secondary"}>
                                        <i className="fas fa-bed me-2"/>
                                        <span>{location.details.bedroom} chambre</span>
                                    </div>
                                )
                            }
                            {
                                location.details.type &&
                                (
                                    <div className="col-6 text-secondary">
                                        <i className="fas fa-city me-2"/>
                                        <span>{location.details.type}</span>
                                    </div>
                                )
                            }
                            {
                                location.details.surface &&
                                (
                                    <div className="col-6 text-secondary">
                                        <i className="fas fa-border-style me-2"/>
                                        <span>{location.details.surface} m</span>
                                    </div>
                                )
                            }
                        </div>
                        <Carousel data={location.gallery} name={"locations"} size={"350px"}/>

                    </div>
                    <div className="col-12 col-lg-6 mt-5 pt-1 d-flex flex-column">

                        <div className="p-3">
                            <h3 className="mb-3">Contact</h3>
                            <div className="row">
                                <p className="col-6"><i className="fas fa-user me-2"/>{location.contact.name}</p>
                                <p className="col-6"><i className="fas fa-at me-2"/>{location.contact.email}</p>
                                {
                                    location.contact.phone &&
                                    (
                                        <p className="col-6"><i className="fas fa-phone me-2"/>{location.contact.phone}</p>
                                    )
                                }
                                {
                                    location.contact.facebook && (
                                        <p className="col-6"><i
                                            className="fab fa-facebook me-2"/>{location.contact.facebook}</p>
                                    )
                                }
                            </div>
                        </div>
                        <hr/>
                        <div className="mt-5 px-3">
                            <h5>Description : </h5>
                            <p>{location.description}</p>
                        </div>
                        {
                            location.details.cost&&
                            (
                                <div className="mt-5 px-3">
                                    <h5>Prix :</h5>
                                    <h5 className="mt-3 text-info mx-3"><strong>{location.cost}$</strong></h5>
                                </div>
                            )
                        }
                    </div>

                    <div className="d-flex py-3">
                        <Link href="/location">
                            <a className="btn btn-info text-white" >Location</a>
                        </Link>
                        <Link href="/">
                            <a className="btn btn-secondary ms-2" >Home</a>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    );
}

Index.getInitialProps = async({query}) =>{
    const location = await getLocation(query.id);
    return {...location}
}

export default Index;