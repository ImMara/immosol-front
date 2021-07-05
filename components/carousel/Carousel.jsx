import React, {useEffect, useRef} from 'react';

function Carousel(props) {

    const images = props.data

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
                {images.map((i,k)=>(
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={k}
                            className="active" aria-current="true" aria-label={k}/>
                ))}
            </div>

            <div className="carousel-inner" style={{height:props.size}}>
                {
                    images.map((i , key) => (
                        <div className={key === 0 ? "carousel-item active" : "carousel-item"} style={{height:props.size}} key={key}>
                            <img src={`https://marastudio.xyz/images/${props.name}/gallery/`+i} className={"object-cover h-100 w-100"} alt="..."/>
                        </div>
                    ))
                }
            </div>

            <button className="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    );
}

export default Carousel;