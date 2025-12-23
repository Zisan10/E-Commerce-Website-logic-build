import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../products/Products";
import Cart from "../Cart/Cart";
import WishList from "../Wishlist/WishList";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderPlace from "../OrderPlace/OrderPlace";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activePannel, setActivePannel] = useState(null);
  const [cart, setCart] = useState(() => {
    const cartStore = localStorage.getItem("cart-item");
    return cartStore ? JSON.parse(cartStore) : [];
  });
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [wishList, setWishList] = useState(() => {
    const wishlistStore = localStorage.getItem("wishlist-item");
    return wishlistStore ? JSON.parse(wishlistStore) : [];
  });

  // save item to localStorage
  useEffect(() => {
    localStorage.setItem("cart-item", JSON.stringify(cart));
    localStorage.setItem("wishlist-item", JSON.stringify(wishList));
  }, [cart,wishList]);

  // Total calculation
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const shippingFee = totalItems * 2;
  const totalOrder = subTotal + shippingFee;

  // handle scroll
  const handleScroll = () => {
    const section = document.getElementById("product-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // cart and Wishlist show tab function
  const handlePannel = (tabName) => {
    setActivePannel((prev) => (prev === tabName ? null : tabName));
  };

  // close pannel function
  const handleClose = () => setActivePannel(null);

  // add to cart function
  const addToCart = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      alert("This Item already in the Cart! Les's checkout");
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // cart product quantity increment
  const quantityIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const quantityDecrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // remove cart item
  const removeItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  // wish list function
  const addToWishlist = (product) => {
    const isWishList = wishList.some((item) => item.id === product.id);

    if (isWishList) {
      setWishList(wishList.filter((item) => item.id !== product.id));
    } else {
      const addDate = new Date().toLocaleDateString("en-GB");
      setWishList([...wishList, { ...product, addDate }]);
    }
  };
  // clear wishlist
  const clearWishlist = () => {
    setWishList([]);
  };

  return (
    <div>
      <Navbar
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        handlePannel={handlePannel}
        totalItems={totalItems}
        wishList={wishList}
      />
      <Banner />
      <Products
        searchTerm={searchTerm}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishList={wishList}
      />
      <Cart
        activePannel={activePannel}
        handleClose={handleClose}
        cart={cart}
        removeItem={removeItem}
        quantityIncrement={quantityIncrement}
        quantityDecrement={quantityDecrement}
        subTotal={subTotal}
        shippingFee={shippingFee}
        totalOrder={totalOrder}
        setOrderSummary={setOrderSummary}
      />
      <WishList
        activePannel={activePannel}
        handleClose={handleClose}
        wishList={wishList}
        addToCart={addToCart}
        clearWishlist={clearWishlist}
      />
      {/* orderSummary  */}
      {orderSummary && (
        <OrderSummary
          cart={cart}
          subtotal={subTotal}
          shippingFee={shippingFee}
          totalOrder={totalOrder}
          setOrderSummary={setOrderSummary}
          setOrderPlaced={setOrderPlaced}
          setCart={setCart}
        />
      )}
      {/* order placed  */}
      {orderPlaced && <OrderPlace setOrderPlaced={setOrderPlaced} />}
    </div>
  );
};

export default Home;
