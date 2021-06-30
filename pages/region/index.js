import React from 'react';
import Head from "../../components/head/Head";
import Carousel from "../../components/carousel/Carousel";

function Index(props) {
    return (
        <>
            <Head/>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        {/*<Carousel/>*/}
                    </div>
                    <div className="col-12">
                        <h2 className="my-5">Notre région</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iure maxime odio odit pariatur. Ad asperiores assumenda at atque beatae consectetur consequatur corporis delectus dicta dolorem dolores eius enim eveniet, excepturi fugiat fugit hic id impedit in inventore ipsum itaque magni modi nisi odit porro provident quis quos sint tempora temporibus ut vitae voluptate. Adipisci cupiditate in, minima molestiae mollitia nemo nulla, numquam optio quae quia soluta suscipit! Ad alias aspernatur laboriosam maiores minus nihil? Architecto corporis deleniti doloremque eos minima nam officia repudiandae unde veritatis vitae! Aliquam debitis distinctio eligendi impedit laboriosam laborum maxime minima modi molestias nostrum, obcaecati optio quidem, quis ratione rem, sequi tenetur. Ad alias aspernatur consequuntur cumque deserunt dignissimos, earum esse exercitationem harum itaque natus quae quaerat quia recusandae similique ullam voluptates. Accusamus aliquam asperiores assumenda autem blanditiis consequatur debitis delectus exercitationem expedita in modi nesciunt, nisi, nobis optio placeat quaerat quo quod sequi vel.</p>
                    </div>
                    <div className="col-12">
                        <div className="mt-5 p-3 border border-2 border-info">
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

export default Index;