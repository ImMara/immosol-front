import React, {useEffect, useState} from 'react';
import Head from "../../components/head/Head";
import Cards from "../../components/cards/Cards";
import {getLocations} from "../../actions";
import Link from "next/link";

function Index(props) {

    const [locations,setLocation] = useState(props.locations)

    const [search,setSearch] = useState("")

    const handleChange = (event) =>{
        const target = event.target
        const value = target.value

        setSearch(value)
    }

    const filtered = () =>{
        return locations.filter(location => location.title.toLowerCase().includes(search))
    }

    return (
        <>
            <Head title={"immosol/location"}/>

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
                    <h1>Location</h1>
                </div>

                <div className="row justify-content-center g-0">
                    {filtered().map(l => (
                        <div className="card col-10 col-md-5 col-xl-3 m-3" style={{height:"350px"}}>
                            <Link href={"/location/"+l._id}>
                                <a className={"text-decoration-none"} >
                                    <Cards data={l} name={"locations"}/>
                                </a>
                            </Link>
                        </div>
                    ))}
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