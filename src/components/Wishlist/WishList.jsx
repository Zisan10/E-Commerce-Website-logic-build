import React from "react";

const WishList = ({ activePannel, handleClose, wishList,addToCart,clearWishlist }) => {
  return (
    <div
      className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 left-auto bottom-0 z-40 w-100 border border-zinc-200 transform transition-transform duration-300
    ${activePannel === "wishlist" ? "translate-x-0" : "translate-x-full"}`}>
      {/* headinf  */}
      <div className="px-10">
        <h3 className="text-3xl font-bold text-zinc-800 py-6 text-center">
          Your Wishlist
        </h3>
      </div>

      {/* wishlist-item  */}
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto scroll">
        {wishList.length === 0 ? (
          <p className="text-zinc-800 text-center">Your WishList is empty!</p>
        ) : (
          wishList.map((product, index) => {
            return (
              <div key={product.id}
                className={`flex items-center gap-3 bg-white px-5 py-1 border-y border-zinc-300
            ${index % 2 === 0 ? "bg-blue-100" : "bg-white"}`}>
                {/* cart image */}
                <div className="w-20 h-20 ">
                  <img
                    src={product.image}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Detail  */}
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-zinc-800 text-lg">
                      {product.name}
                    </h4>
                    <p className="text-zinc-400 text-sm">Added {product.addDate}</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="">
                      {product.onSale && (
                        <span className="text-zinc-600 line-through font-semibold text-lg mr-4">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-red-600 font-semibold text-lg ">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <button onClick={()=> addToCart(product)} className="bg-blue-600 text-white px-5 text-sm rounded-full active:bg-blue-700 cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* button  */}
      <div className="flex gap-x-2 px-10 pb-3">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
          onClick={() => handleClose()}>
          Close
        </button>
        <button onClick={()=>clearWishlist()} className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default WishList;
