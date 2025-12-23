import React from "react";

const OrderSummary = ({
  cart,
  subtotal,
  shippingFee,
  totalOrder,
  setOrderSummary,
  setOrderPlaced,
  setCart,
}) => {
  const handlePlacedOrder = () => {
    setOrderSummary(false);
    setOrderPlaced(true);
    setCart([]);
  };

  return (
    <section className="bg-black/85 fixed inset-0 z-40 flex justify-center items-center h-full scroll overflow-y-scroll">
      <div className="border border-zinc-300 bg-zinc-100 p-8 w-150 rounded-lg">
        <h2 className="text-3xl text-zinc-800 font-bold mb-5 text-center">
          Order Summary
        </h2>

        <div>
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-zinc-300">
                <span className="text-zinc-800 py-2 ">
                  {item.name} x{" "}
                  <span className="text-blue-600">({item.quantity})</span>
                </span>
                <span className="text-zinc-800 py-2">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between pt-3">
            <span className="text-zinc-800 ">SubTotal</span>
            <span className="text-zinc-800 ">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-zinc-800 ">Shipping & Handling</span>
            <span className="text-zinc-800 ">${shippingFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-3 border-t border-zinc-300 mb-5">
            <span className="text-blue-600 font-bold text-xl">Total Order</span>
            <span className="text-blue-600 font-bold text-xl">
              ${totalOrder.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex mt-10 gap-x-3">
          <button
            onClick={()=> setOrderSummary(false)}
            className="bg-zinc-800 flex-1 py-3 active:bg-zinc-900 cursor-pointer text-white rounded-lg">
            Cancel
          </button>
          <button
            onClick={handlePlacedOrder}
            className="bg-blue-600 flex-1 py-3 active:bg-blue-700 cursor-pointer text-white rounded-lg">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
