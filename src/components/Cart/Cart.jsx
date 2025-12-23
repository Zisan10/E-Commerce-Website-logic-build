import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = ({
  activePannel,
  handleClose,
  cart,
  removeItem,
  quantityIncrement,
  quantityDecrement,
  subTotal,
  totalOrder,
  shippingFee,
  setOrderSummary,
}) => {
  return (
    <div
      className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 left-auto bottom-0 z-40 w-100 border border-zinc-200 transform transition-transform duration-300 
    ${activePannel === "cart" ? "translate-x-0" : "translate-x-full"}`}>
      {/* heading  */}
      <div className="px-10">
        <h3 className="text-3xl font-bold text-zinc-800 py-6 text-center">
          Your Cart
        </h3>
      </div>

      {/* cart-item  */}
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto scroll">
        {cart.length === 0 ? (
          <p className="text-center text-red-500 ">No Product Hare</p>
        ) : (
          cart.map((product, index) => {
            return (
              <div key={index}
                className={`flex items-center gap-3 px-5 py-1 border-y border-zinc-300 ${
                  index % 2 === 0 ? "bg-blue-100" : "bg-white"
                }`}>
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
                    <button
                      className="flex justify-center items-center bg-red-600 rounded-full text-white w-8 h-8 mr-6.25 cursor-pointer active:bg-red-700"
                      onClick={() => removeItem(product)}>
                      <FaTrash />
                    </button>
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
                    <div className="flex gap-2">
                      <button onClick={()=> quantityDecrement(product)} className="flex justify-center items-center bg-blue-600 rounded-full text-white w-7 h-7 cursor-pointer text-[14px] active:bg-blue-700">
                        <FaMinus />
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="flex justify-center items-center bg-blue-600 rounded-full text-white w-7 h-7 cursor-pointer text-[14px] active:bg-blue-700"
                        onClick={() => quantityIncrement(product)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* total cart  */}
      <div className="px-10 border-y border-zinc-300">
        <div className="flex justify-between">
          <span className="text-zinc-800 ">Subtotal</span>
          <span className="text-zinc-800 ">${subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-zinc-800 ">Shipping & Handling</span>
          <span className="text-zinc-800 ">${shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pb-2 border-t border-zinc-300">
          <span className=" text-lg text-blue-600 font-bold">Total Order</span>
          <span className="text-lg text-blue-600 font-bold ">${totalOrder.toFixed(2)}</span>
        </div>
      </div>

      {/* button  */}
      <div className="flex gap-x-2 px-10 pb-3">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
          onClick={() => handleClose()}>
          Close
        </button>
        <button
          className={` text-white flex-1 h-[7vh]  active:bg-blue-700
        ${
          cart.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 cursor-pointer"
        }`}
          disabled={cart.length === 0} onClick={()=> setOrderSummary(true)}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
