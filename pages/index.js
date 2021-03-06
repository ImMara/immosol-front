import Head from '../components/head/Head';
import Cards from "../components/cards/Cards";
import {getFeatured, getLocations, getVentes} from "../actions";
import Index from "./vente";
import React, {useState} from "react";
import Link from "next/link";
import Pagination from "../components/pagination/Pagination";
import Search from "../components/search/Search";


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
                <div className={'container p-0 m-0 position-absolute w-75 top-50 start-50 text-white'} style={{transform:'translate(-50%,-50%)'}}>
                    <h3 className={"text-center text-easy"}>L'immobilier au soleil</h3>
                    <h1 className={"mb-3 mb-sm-5 text-center text-easy"}>ImmoSol InvestFa</h1>
                    <Search locations={props.locations} ventes={props.ventes}/>
                </div>
        </div>
        <div className="container">
            <div className={"p-3 m-h-50 w-100 pb-5 row g-3 align-items-center  justify-content-center"}>
                <div className={"col-12 m-5"}>
                    <h2>Nos locations mise en avant: </h2>
                </div>
                {
                    paginationFeaturedLocation.map((f,k) => (
                        <div className="col-12 col-md-6 col-xl-4" key={k} >
                            <div className="card" style={{minHeight:"350px"}}>
                                <Link href={"/location/"+f._id}>
                                    <a className={"text-decoration-none"} >
                                        <Cards data={f} name={"locations"} />
                                    </a>
                                </Link>
                            </div>
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
            <div className={"p-3 m-h-50 w-100 pb-5 row g-3 align-items-center justify-content-center"}>
                <div className={"col-12 mb-5"}>
                    <h2>Nos vente mise en avant: </h2>
                </div>
                {
                    paginationFeaturedVente.map((f,k) => (
                        <div className="col-12 col-md-6 col-xl-4" key={k} >
                            <div className="card" style={{height:"350px"}}>
                                <Link href={"/vente/"+f._id}>
                                    <a className={"text-decoration-none"} >
                                        <Cards data={f} name={"ventes"}  />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))
                }
                <div className="col-12">
                    { itemsPerPage < featuredVente.length &&
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
    const locations = await getLocations()
    const ventes = await getVentes()
    return {featured,...ventes,...locations}
}
