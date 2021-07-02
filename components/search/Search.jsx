import React from 'react';

function Search(props) {
    return (
        <>
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
        </>
    );
}

export default Search;