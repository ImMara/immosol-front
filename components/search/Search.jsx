import React, {useEffect, useState} from 'react';
import {getLocations} from '../../actions';
import Index from "../../pages/location";

function Search(props) {

    const [locations,setLocation] = useState(props.locations)
    console.log(locations)

    const [selector,setSelector] = useState('Type de bien')
    const [category,setCategory] = useState()

    const clickSelector = (event) =>{
        const target = event.target
        const value = target.textContent
        setSelector(value)
    }

    const checkbox = (event) =>{
        const target = event.target
        const value = target.value
        setCategory(value)
    }

    const filtered = () =>{
        // switch () {
        //
        // }
    }

    return (
        <>
            <div>
                <div className="input-group flex-column flex-lg-row">
                    <button type="button"
                            className="btn btn-dark p-2 p-lg-3 px-5 dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                        <span className="px-5">{selector}</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={clickSelector} >Maison</a></li>
                        <li><a className="dropdown-item" onClick={clickSelector} >Appartement</a></li>
                        <li><a className="dropdown-item" onClick={clickSelector} >Tous</a></li>
                    </ul>
                    <input type="text" data-bs-toggle="dropdown" className="form-control w-auto border-1 border-md-5 border-white"   aria-label="Text input with segmented dropdown button"/>
                    <ul className={"dropdown-menu"}>

                    </ul>
                    <button type="button" className="btn btn-info text-white p-2 p-lg-3 px-5">Rechercher</button>
                </div>
            </div>


            <div className={"mt-3 mb-2 d-flex flex-wrap flex-column flex-sm-row"}>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="vente" onClick={checkbox} name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Vente
                        </label>
                </div>
                <div className="form-check ms-2">
                    <input className="form-check-input" type="radio" value="location" onClick={checkbox} name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Location
                        </label>
                </div>
                <div className="form-check ms-2">
                    <input className="form-check-input" type="radio" value="all" onClick={checkbox} name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        tous
                    </label>
                </div>
            </div>
        </>
    );
}

Search.getInitialProps = async () =>{
    const locations = await getLocations()
    return {...locations}
}
export default Search;