import React from "react";
import Navbar from "../../componenets/layouts/navbar/Navbar";
import Footer from "../../componenets/layouts/footer/Footer";
import CartItemsContainer from "../../componenets/layouts/cart-items-container/CartItemsContainer";

const CartPage = () => {
    return (
        <section>
            <Navbar darkTheme={ true } />
            
            <CartItemsContainer />

            <Footer />
        </section>
    )
}

export default CartPage;