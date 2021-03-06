import React from 'react';
import Head from "../../components/head/Head";
import Carousel from "../../components/carousel/Carousel";
import {getRegion} from "../../actions";
import nl2br from "react-nl2br";

function Index(props) {
    return (
        <>
            <Head title={"immosol/region"}/>
            <div className="container-fluid p-0 m-0">
                <div className="row g-0">
                    <div className="col-12">
                        <Carousel data={props.region[0].gallery} name={"region"} size={"50vh"}/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="my-5">{props.region[0].title}</h2>
                        <p>{ nl2br(props.region[0].description)}</p>
                    </div>
                    <hr className={"my-5"}/>
                    <div className="col-12 text-center">
                        <div className="p-3">
                            <h3 className="mb-3">Contact</h3>
                            <div className="row">
                                <p className="col-6"><i className="fas fa-user me-2"/>Mario letti</p>
                                <p className="col-6"><i className="fas fa-at me-2"/>mario@gmail.com</p>
                                <p className="col-6"><i className="fas fa-phone me-2"/>02/333 33 33</p>
                                <p className="col-6"><i className="fab fa-facebook me-2"/>facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
Index.getInitialProps = async () => {
    const region = await getRegion();
    return {...region}
}
export default Index;