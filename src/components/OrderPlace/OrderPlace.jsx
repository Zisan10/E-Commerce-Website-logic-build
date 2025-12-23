import React from 'react'

const OrderPlace = ({setOrderPlaced}) => {
  return (
    <section className='bg-black/85 fixed inset-0 z-40 flex justify-center items-center'>
        <div className='border border-zinc-300 bg-zinc-100 p-8 w-150 rounded-lg text-center'>
            <h2 className='text-3xl text-green-600 font-bold'>Order Placed Successfull!😍</h2>
            <p className='text-zinc-800 my-4'>Thanks for your purchase</p>
            <button className='px-12 py-3 mt-3 cursor-pointer rounded-lg text-xl bg-blue-600 active:bg-blue-700 text-white' onClick={()=>setOrderPlaced(false)}>Close</button>
        </div>

    </section>
  )
}

export default OrderPlace
