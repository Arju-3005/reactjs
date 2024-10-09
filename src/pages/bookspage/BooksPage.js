import React from "react";
import './booksPage.styles.css';
import Navbar from '../../componenets/layouts/navbar/Navbar';
import SearchInputForm from '../../componenets/forms/searchInputForm/SearchInputForm';
import ProductListingAll from "../../componenets/layouts/product-listing-all/ProductListingAll";
import Footer from '../../componenets/layouts/footer/Footer';

const BooksPage = () => {
    return (
        <section>
            <Navbar darkTheme={ true } />

            <div className="search-container">
                <h2>Find the <span className="text-primary">storyBooks</span> that you want</h2>
                <SearchInputForm darkTheme={ false } />
            </div>
            <ProductListingAll />
            <Footer />
        </section>
    )
}

export default BooksPage;