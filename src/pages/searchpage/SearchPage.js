import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../componenets/layouts/navbar/Navbar';
import Footer from '../../componenets/layouts/footer/Footer';
import './searchpage.styles.css';
import { BookData } from '../../util/BookData';
import SearchResultCard from '../../componenets/cards/search-result-card/SearchResultCard';

const SearchPage = () => {
    const location = useLocation();
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        let searchValue = [];

        searchValue = BookData.filter((data) => data.book_name.toLowerCase().includes(location.state.toLowerCase()));

        setSearchResult(searchValue);
    }, [location.state])

    return (
        <section>
            <Navbar darkTheme={true} />
            
            <div className='search-result-container'>
                <div className="container">
                    <h2>Your Search Result</h2>

                    {searchResult.map((result) => (
                        <SearchResultCard key={result.id} bookData={result} />
                    ))}
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default SearchPage;