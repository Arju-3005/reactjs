import React from "react";
import Navbar from '../../componenets/layouts/navbar/Navbar';
import DetailsSection from "../../componenets/layouts/details-section/DetailsSection";
import Footer from '../../componenets/layouts/footer/Footer';

const BookDetails = () => {
    return (
        <section>
           <Navbar darkTheme={ true } />

           <DetailsSection />
           <Footer />
        </section>
    )
}

export default BookDetails;