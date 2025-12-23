import React, { use, useState } from "react";
import ProductList from "./Product";
import { GoHeartFill } from "react-icons/go";

const Products = ({searchTerm, addToCart,addToWishlist,wishList}) => {
  const [activeTab, setActiveTab] = useState("All");

  // categories array
  const categories = [
    "All",
    "Mens",
    "Womens",
    "Kids",
    "New Aeeivals",
    "On Sale",
  ];

  const filteredProducts = ProductList.filter((item) => {
    const matchCategory =
      activeTab === "All" ||
      (activeTab === "New Aeeivals" && item.newArrival) ||
      (activeTab === "On Sale" && item.onSale) ||
      item.category === activeTab;

      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchesSearch;
  });

  // products list map categories
  const renderProducts = filteredProducts.map((product) => {
    return (
      // Card
      <div
        key={product.id}
        className="bg-zinc-100 rounded-lg p-5 border border-zinc-300">
        <div className="flex justify-between items-center">
          <button onClick={()=> addToWishlist(product)} className={`text-3xl cursor-pointer
            ${wishList.some(item=> item.id === product.id) ? "text-red-600" : "text-zinc-300"}`}>
            <GoHeartFill />
          </button>

          <div>
            {(product.onSale || product.newArrival) && (
              <span
                className={`px-3 py-1 text-white ${
                  product.onSale ? "bg-red-600" : "bg-green-600"
                }`}>
                {product.onSale ? "Sale" : "New"}
              </span>
            )}
          </div>
        </div>

        {/* product image  */}
        <div className="w-full h-[30vh] mt-2">
          <img className="w-full h-full" src={product.image} />
        </div>

        {/* Card Detail  */}
        <div className="text-center mt-3">
          <h3 className="text-[1.4rem] font-semibold mt-2">{product.name}</h3>
          <div className="mt-1 mb-3">
            {product.onSale && (
              <span className="text-zinc-600 line-through font-semibold text-lg mr-8">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
            <span className="text-red-600 font-semibold text-lg ">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button className="bg-blue-600 text-white text-lg py-2 w-full rounded-lg cursor-pointer active:bg-blue-700"
          onClick={()=>addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <section
      id="product-section"
      className="max-w-300 mx-auto px-10 py-10">
      {/* Tabs  */}
      <div className="flex gap-3 justify-center items-center mt-6 mb-6">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className={`px-8 py-2 rounded-full text-lg cursor-pointer ${
                activeTab === category
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 text-zinc-800"
              }`}
              onClick={() => setActiveTab(category)}>
              {category}
            </button>
          );
        })}
      </div>
      {/* product listing  */}
      <div className="grid grid-cols-4 gap-9 mt-10">
        {
            filteredProducts.length === 0 ? 
            <p className="text-red-500 text-2xl font-bold col-span-4 text-center">Not Found😨 & Try Again</p> :
            renderProducts
        }
        </div>
    </section>
  );
};

export default Products;
