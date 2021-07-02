import React from 'react';

function Footer(props) {
    return (
        <>
            <footer className="text-center text-white">

                <div className="container pt-4">

                    <section className="mb-4">

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.facebook.com/fabrice.fa.37"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"/></a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"/></a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"/></a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"/></a>

                    </section>

                </div>

                <div className="text-center text-dark p-3">
                    © 2020 Copyright:
                    <a className="text-dark" href="https://marastudio.dev">marastudio.dev</a>
                </div>

            </footer>
        </>
    );
}

export default Footer;