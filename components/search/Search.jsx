import React, {useEffect, useState} from 'react';
import Pagination from "../pagination/Pagination";

function Search(props) {

    const [locations,setLocation] = useState(props.locations)
    const [ventes,setVentes] = useState(props.ventes)
    const [search,setSearch] = useState("")

    const [selector,setSelector] = useState('Type de bien')
    const [category,setCategory] = useState("tous")

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    const clickSelector = (event) =>{
        const target = event.target
        const value = target.textContent
        setSelector(value)
    }

    const handleChange = (event) =>{
        const target = event.target
        const value = target.value
        setSearch(value)
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const checkbox = (event) =>{
        const target = event.target
        const value = target.value
        setCategory(value)
    }

    const filtered = () =>{
        let filterByType;
        let newArray = [];
        ventes.map(v => newArray.push(v))
        locations.map(l => newArray.push(l))
        switch (category) {
            case "vente":
                switch (selector) {
                    case "Appartement" :
                        filterByType = ventes.filter(v => v.details.type === selector.toLowerCase())
                        return filterByType.filter(f => f.title.includes(search))
                    case "Studio" :
                        filterByType = ventes.filter(v => v.details.type === selector.toLowerCase())
                        return filterByType.filter(f => f.title.includes(search))
                    case "Maison" :
                        filterByType = ventes.filter(v => v.details.type === selector.toLowerCase())
                        return filterByType.filter(f => f.title.includes(search))
                    default:
                        return ventes.filter(f => f.title.includes(search));
                }
            case "location":
                switch (selector) {
                    case "Appartement" :
                        filterByType = locations.filter(v => v.details.type === selector.toLowerCase())
                        return filterByType.filter(f => f.title.includes(search))
                    case "Studio" :
                        filterByType = locations.filter(v => v.details.type === selector.toLowerCase())
                        return filterByType.filter(f => f.title.includes(search))
                    case "Maison" :
                        filterByType = locations.filter(v => v.details.type === selector.toLowerCase())
                        return filterByType.filter(f => f.title.includes(search))
                    default:
                        return locations.filter(f => f.title.includes(search));
                }
            default:
                switch (selector) {
                    case "Appartement" :
                        filterByType = newArray.filter(v => v.details.type === selector.toLowerCase())
                        return filterByType.filter(f => f.title.includes(search))
                    case "Studio" :
                        filterByType = newArray.filter(v => v.details.type === selector.toLowerCase())
                        return filterByType.filter(f => f.title.includes(search))
                    case "Maison" :
                        filterByType = newArray.filter(v => v.details.type === selector.toLowerCase())
                        return filterByType.filter(f => f.title.includes(search))
                    default:
                        return newArray.filter(a => a.title.includes(search));
                }
        }
    }

    const pagination = Pagination.getData(filtered(),currentPage,itemsPerPage)

    return (
        <>
            <div>
                <div className="input-group flex-column flex-lg-row">
                    <button type="button"
                            style={{minWidth:'250px'}}
                            className="btn btn-dark p-2 p-lg-3 px-5 dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                        <span className="px-5">{selector}</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={ (event) => {clickSelector(event); handlePageChange(1)}} >Maison</a></li>
                        <li><a className="dropdown-item" onClick={ (event) => {clickSelector(event); handlePageChange(1)}} >Appartement</a></li>
                        <li><a className="dropdown-item" onClick={ (event) => {clickSelector(event); handlePageChange(1)}} >Studio</a></li>
                        <li><a className="dropdown-item" onClick={ (event) => {clickSelector(event); handlePageChange(1)}} >Tous</a></li>
                    </ul>
                    <input type="text" data-bs-toggle="dropdown" onChange={handleChange} className="form-control w-auto border-1 border-md-5 border-white" data-bs-auto-close="outside" aria-expanded="false"/>
                    <ul className={"dropdown-menu"} aria-labelledby="dropdownMenuClickableInside">
                        {pagination.map((d,k) => (
                            <li key={k}>
                                <a className={"dropdown-item"} href={ "/"+ (d.sold?"vente/"+d._id : "location/"+d._id) }>
                                    {d.title}
                                    <span className="badge ms-1 bg-secondary">{d.sold?"Vente":"Location"}</span>
                                </a>
                            </li>
                        ))}
                        <div className="dropdown-divider"/>
                        <li>
                        { itemsPerPage < filtered().length &&
                        <Pagination
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                            length={filtered().length}
                            onPageChanged={handlePageChange}
                        />
                        }
                    </li>
                    </ul>
                    <button type="button" className="btn btn-info text-white p-2 p-lg-3 px-5">Rechercher</button>
                </div>
            </div>


            <div className={"mt-3 mb-2 d-flex flex-wrap flex-column flex-sm-row"}>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="vente" onClick={(event) =>{ checkbox(event); handlePageChange(1)}} name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Vente
                        </label>
                </div>
                <div className="form-check ms-0 ms-sm-2">
                    <input className="form-check-input" type="radio" value="location" onClick={(event) =>{ checkbox(event); handlePageChange(1)}} name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Location
                        </label>
                </div>
                <div className="form-check ms-0 ms-sm-2">
                    <input className="form-check-input" type="radio" value="all" onClick={(event) =>{ checkbox(event); handlePageChange(1)}} name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Tous
                    </label>
                </div>
            </div>
        </>
    );
}

export default Search;