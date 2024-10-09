import React from "react";
import Showcase from "../../componenets/layouts/showcase/Showcase";
import ProductListing from "../../componenets/layouts/product-listing/ProductListing";
import Footer from '../../componenets/layouts/footer/Footer';

const HomePage = () => {
    return (
        <section>
            <Showcase />
            <ProductListing />
            <Footer />
        </section>
    )
}

export default HomePage;