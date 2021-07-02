import Head from '../components/head/Head';
import Cards from "../components/cards/Cards";
import {getFeatured} from "../actions";
import Index from "./vente";
import React, {useState} from "react";
import Link from "next/link";
import Pagination from "../components/pagination/Pagination";


export default function Home(props) {

    const [featuredLocation,setFeaturedLocation] = useState(props.featured.query[0])
    const [featuredVente , setFeaturedVente] = useState(props.featured.query[1])

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 3

    const [currentPageVente,setCurrentPageVente] = useState(1)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handlePageChangeVente = (page) => {
        setCurrentPageVente(page)
    }
    const paginationFeaturedVente = Pagination.getData(featuredVente,currentPageVente,itemsPerPage)
    const paginationFeaturedLocation = Pagination.getData(featuredLocation,currentPage,itemsPerPage)

  return (
      <>
        <Head title={"home"} />
        <div className={"m-h-50 w-100 position-relative"}>
            <img src="/images/home.png" className={"home-img object-cover"}  alt=""/>
                <div className={'container position-absolute w-75 top-50 start-50 text-white'} style={{transform:'translate(-50%,-50%)'}}>
                    <h3 className={"text-center text-easy"}>the best way to</h3>
                    <h1 className={"mb-3 mb-sm-5 text-center text-easy"}>Find your perfect Home</h1>
                    <div>
                        <div className="input-group flex-column flex-lg-row">
                            <button type="button"
                                    className="btn btn-dark p-2 p-lg-3 px-5 dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                                <span className="px-5">maison</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                            <input type="text" className="form-control w-auto border-1 border-md-5 border-white" aria-label="Text input with segmented dropdown button"/>
                            <button type="button" className="btn btn-info text-white p-2 p-lg-3 px-5">Rechercher</button>
                        </div>
                    </div>
                    <div className={"mt-3 mb-2 d-flex flex-wrap flex-column flex-sm-row"}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label className="form-check-label text-easy" htmlFor="inlineCheckbox1">location</label>
                        </div>
                        <div className="form-check form-check-inline ms-sm-5">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label text-easy" htmlFor="inlineCheckbox2">vente</label>
                        </div>
                        <div className="form-check form-check-inline ms-sm-5">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label text-easy" htmlFor="inlineCheckbox3">vendu</label>
                        </div>
                    </div>
                </div>
        </div>
        <div className="container">
            <div className={"p-3 m-h-50 w-100 pb-5 row g-0 align-items-center  justify-content-center"}>
                <div className={"col-12 m-5"}>
                    <h2>Featured Location</h2>
                </div>
                {
                    paginationFeaturedLocation.map((f,k) => (
                        <div className="card col-12 col-md-6 col-xl-3 m-2" key={k} style={{height:"350px"}}>
                            <Link href={"/location/"+f._id}>
                                <a className={"text-decoration-none"} >
                                    <Cards data={f} name={"locations"} />
                                </a>
                            </Link>
                        </div>
                    ))
                }
                <div className="col-12">
                    { itemsPerPage < featuredLocation.length &&
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        length={featuredLocation.length}
                        onPageChanged={handlePageChange}
                    />
                    }
                </div>
            </div>
            <div className={"p-3 m-h-50 w-100 pb-5 row g-0 align-items-center justify-content-center"}>
                <div className={"col-12 mb-5"}>
                    <h2>Featured Vente</h2>
                </div>
                {
                    paginationFeaturedVente.map((f,k) => (
                        <div className="card col-12 col-md-6 col-xl-3 m-2" key={k} style={{height:"350px"}}>
                            <Link href={"/vente/"+f._id}>
                                <a className={"text-decoration-none"} >
                                    <Cards data={f} name={"ventes"}  />
                                </a>
                            </Link>
                        </div>
                    ))
                }
                <div className="col-12">
                    { itemsPerPage < featuredLocation.length &&
                    <Pagination
                        currentPage={currentPageVente}
                        itemsPerPage={itemsPerPage}
                        length={featuredVente.length}
                        onPageChanged={handlePageChange}
                    />
                    }
                </div>
            </div>
        </div>
      </>
  )
}
Home.getInitialProps = async () =>{
    const featured = await getFeatured()
    return {featured}
}
