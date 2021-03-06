import React, {useEffect, useState} from 'react';
import Head from "../../components/head/Head";
import Cards from "../../components/cards/Cards";
import {getLocations} from "../../actions";
import Link from "next/link";
import Pagination from "../../components/pagination/Pagination";

function Index(props) {

    const [locations,setLocation] = useState(props.locations)
    const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage=6;

    console.log(locations)

    const [search,setSearch] = useState("")

    const handleChange = (event) =>{
        const target = event.target
        const value = target.value

        setSearch(value)
    }

    const filtered = () =>{
        return locations.filter(location => location.title.toLowerCase().includes(search))
    }

    const handlePageChange = (page) =>{
        setCurrentPage(page)
    }

    const pagination = Pagination.getData(filtered(),currentPage,itemsPerPage)

    return (
        <>
            <Head title={"immosol/location"}/>

            <div className={"h-50 w-100 position-relative bg-dark"}>
                <img src="/images/vente.jpg" className="w-100 h-100 object-cover" alt=""/>
                <div className="position-absolute top-50 start-50 text-white text-easy-strong" style={{transform:'translate(-50%,-50%)'}}>
                    <h2>Nos propriétés</h2>
                    <p>A louer</p>
                </div>
            </div>

            <div className="container mb-5 pt-5">

                <div className='input-group'>
                    <button className='btn btn-info text-white disabled'> Rechercher</button>
                    <input type="text" className="form-control p-2" onChange={handleChange} />
                </div>

                <div className={"mt-3"}>
                    <h1>En location</h1>
                </div>
                <div>
                    { itemsPerPage < filtered().length &&
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        length={filtered().length}
                        onPageChanged={handlePageChange}
                    />
                    }
                </div>
                <div className="row justify-content-center g-3">
                    {pagination.map((l,k) => (
                        <div className="col-10 col-md-5 col-xl-4" key={k} >
                            <div className="card" style={{height:"350px"}}>
                                <Link href={"/location/"+l._id}>
                                    <a className={"text-decoration-none"} >
                                        <Cards data={l} name={"locations"}/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    { itemsPerPage < filtered().length &&
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        length={filtered().length}
                        onPageChanged={handlePageChange}
                    />
                    }
                </div>
            </div>
        </>
    );
}

Index.getInitialProps = async () =>{
    const locations = await getLocations()
    return {...locations}
}

export default Index;