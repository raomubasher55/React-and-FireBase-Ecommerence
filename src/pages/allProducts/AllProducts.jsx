import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import img from '../../assets/bag_1.png'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'

const AllProducts = () => {
  

    return (
        <Layout>
            <div className="py-8 pt-16">
                {/* Heading  */}
                <div className="">
                    <h1 className=" text-center mb-5 text-2xl font-semibold">All Products</h1>
                </div>
                <div className='flex flex-wrap justify-center items-center'>
                <ProductCard />
                </div>
            </div>
        </Layout>
    )
}

export default AllProducts
