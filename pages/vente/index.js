import React, {useState} from 'react';
import Head from "../../components/head/Head";
import Cards from "../../components/cards/Cards";
import Link from 'next/link';
import {getVentes} from "../../actions";
import Pagination from "../../components/pagination/Pagination";

function Index(props) {

    const [search,setSearch] = useState("")
    const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage=6;

    const handleChange = (event) =>{
        const target = event.target
        const value = target.value

        setSearch(value)
    }

    const filtered = () =>{
       return props.ventes.filter(vente => vente.title.toLowerCase().includes(search))
    }

    const handlePageChange = (page) =>{
        setCurrentPage(page)
    }

    const pagination = Pagination.getData(filtered(),currentPage,itemsPerPage)

    return (
        <>
            <Head title={"immosol/vente"}/>

            <div className={"h-50 w-100 position-relative bg-dark"}>
                <img src="/images/vente.jpg" className="w-100 h-100 object-cover" alt=""/>
                <div className="position-absolute top-50 start-50 text-white text-easy" style={{transform:'translate(-50%,-50%)'}}>
                    <h2>Properties</h2>
                    <p>Home / Properties</p>
                </div>
            </div>

            <div className="container mb-5 pt-5">

                <div className='input-group'>
                    <button className='btn btn-info text-white disabled'> rechercher</button>
                    <input type="text" className="form-control p-2" onChange={handleChange} />
                </div>

                <div className={"mt-3"}>
                    <h1>Vente</h1>
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
                <div className="row justify-content-center g-0">
                    {pagination.map((v,k) => (
                        <div className="card col-10 col-md-5 col-xl-3 m-3" key={k} style={{height:"350px"}}>
                            <Link href={"/vente/"+v._id}>
                                <a className={"text-decoration-none"} >
                                    <Cards data={v} name={"ventes"}/>
                                </a>
                            </Link>
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
    const ventes = await getVentes()
    return {...ventes}
}
export default Index;