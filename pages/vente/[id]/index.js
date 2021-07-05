import React from 'react';
import Head from "../../../components/head/Head";
import Carousel from "../../../components/carousel/Carousel";
import {useRouter} from "next/router";
import {getVente} from "../../../actions";
import Link from 'next/link';

function Index(props) {

    const router = useRouter()
    const {id} = router.query
    const {vente} = props

    return (
        <>
            <Head title={`immosol/vente/${vente.title}`}/>

            <div className={"h-50 w-100 position-relative bg-dark"}>

                <img src={"https://marastudio.xyz/images/ventes/gallery/"+vente.gallery[vente.image]} className={"object-cover h-100 w-100"}  alt="..."/>

                <div className="position-absolute top-50 start-50 text-white text-easy-strong text-center" style={{transform:'translate(-50%,-50%)'}}>
                    <h2>{vente.title}</h2>
                    <p>{vente.details.type+ "/" + vente.zip}</p>
                </div>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-12 col-lg-6">

                        <h2 className="mt-5 text-capitalize">{vente.title}</h2>

                        <div className="d-flex my-1">
                            {
                                vente.featured && (
                                <span className="badge bg-danger mx-1 p-2">Featured</span>
                                )
                            }
                            {
                                vente.sold === "Disponible" ? (
                                    <span className="badge bg-info mx-1 p-2">Disponible</span>
                                ):(
                                    <span className="badge bg-danger mx-1 p-2">Vendu</span>
                                )
                            }
                            <span className="badge bg-info mx-1 p-2">{vente.type}</span>
                            {
                                vente.details.parking && (
                                    <span className="badge bg-secondary mx-1 p-2"><i className="fas fa-parking"/></span>
                                )
                            }
                            {
                                vente.details.pool && (
                                    <span className="badge bg-secondary mx-1 p-2"><i className="fas fa-swimmer"/></span>
                                )
                            }
                            {
                                vente.details.kitchen && (
                                    <span className="badge bg-secondary mx-1 p-2"><i className="fas fa-utensils"/></span>
                                )
                            }
                        </div>

                        <div className="row my-5 mx-3">
                            {
                                vente.details.bathroom &&
                                (
                                    <div className={"col-6 text-secondary"}>
                                        <i className="fas fa-bath me-2"/>
                                        <span>{ vente.details.bathroom } salle de bain</span>
                                    </div>
                                )
                            }
                            {
                                vente.details.bedroom &&
                                (
                                    <div className={"col-6 text-secondary"}>
                                        <i className="fas fa-bed me-2"/>
                                        <span>{ vente.details.bedroom } chambre</span>
                                    </div>
                                )
                            }
                            {
                                vente.details.type &&
                                (
                                    <div className="col-6 text-secondary">
                                        <i className="fas fa-city me-2"/>
                                        <span>{ vente.details.type }</span>
                                    </div>
                                )
                            }
                            {
                                vente.details.surface &&
                                (
                                    <div className="col-6 text-secondary">
                                        <i className="fas fa-border-style me-2"/>
                                        <span>{ vente.details.surface } m</span>
                                    </div>
                                )
                            }
                        </div>

                        <Carousel data={vente.gallery} name={"ventes"} size={"350px"}/>

                    </div>

                    <div className="col-12 col-lg-6 mt-5 pt-1 d-flex flex-column">

                        <div className="p-3">
                            <h3 className="mb-3">Contact</h3>
                            <div className="row">
                                <p className="col-6"><i className="fas fa-user me-2"/>{vente.contact.name}</p>
                                <p className="col-6"><i className="fas fa-at me-2"/>{vente.contact.email}</p>
                                {
                                    vente.contact.phone &&
                                    (
                                        <p className="col-6"><i className="fas fa-phone me-2"/>{vente.contact.phone}</p>
                                    )
                                }
                                {
                                    vente.contact.facebook&&
                                    (
                                        <p className="col-6"><i className="fab fa-facebook me-2"/>{vente.contact.facebook}</p>
                                    )
                                }
                            </div>
                        </div>
                        <hr/>

                        <div className="mt-5 px-3">
                            <h5 >Description : </h5>
                            <p>{ vente.description }</p>
                        </div>
                        {
                            vente.cost &&
                            (
                                <div className="mt-5 px-3">
                                    <h5>Prix :</h5>
                                    <h5 className="mt-3 text-info mx-3"><strong>{ vente.cost }$</strong></h5>
                                </div>
                            )
                        }
                    </div>

                    <div className="d-flex py-3">
                        <Link href="/vente">
                            <a className="btn btn-info text-white" >Vente</a>
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
    const vente = await getVente(query.id);
    return {...vente}
}
export default Index;