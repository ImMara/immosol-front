import Head from '../components/head/Head';
import Cards from "../components/cards/Cards";
import {getFeatured} from "../actions";
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
                <div className={'container position-absolute w-75 top-50 start-50 text-white'} style={{transform:'translate(-50%,-50%)'}}>
                    <h3 className={"text-center text-easy"}>the best way to</h3>
                    <h1 className={"mb-3 mb-sm-5 text-center text-easy"}>Find your perfect Home</h1>
                    <Search/>
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
