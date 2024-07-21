import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMyContext } from '../../context/MyContext';
import Loader from '../loader/Loader'
import { deleteDoc, doc } from 'firebase/firestore';
import { fireDB } from '../../firebase/firebaseCongif';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const { getAllProducts, loading, setLoading, getAllProductFunction } = useMyContext();
    const navigate = useNavigate();

    // delete product
    const deleteProduct = async (id) => {
        setLoading(true);
        try {
            await deleteDoc(doc (fireDB , 'products' , id));
            toast.success('Product delete Successfully');
            getAllProductFunction();
            setLoading(false)
            navigate('/admin-dashboard');
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }



    return (
        <>
            <div>
                <div className="py-5 flex justify-between items-center">
                    {/* text  */}
                    <h1 className=" text-xl text-blue-gray-300 font-bold">All Product</h1>
                    {/* Add Product Button  */}
                    <Link to={'/add-product'}>
                        <button className="px-5 py-2 bg-blue-gray-50 border border-blue-gray-100 rounded-lg">Add Product</button>
                    </Link>
                </div>

                {/* Loading  */}
                <div className="flex justify-center relative top-20">
                    {/* {loading && <Loader />} */}
                </div>

                {/* table  */}
                <div className="w-full overflow-x-auto mb-5">

                    <table className="w-full text-left border border-collapse sm:border-separate border-blue-gray-100 text-blue-gray-400" >

                        <tbody>
                            <tr>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-blue-gray-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-blue-gray-100 text-slate-700 bg-slate-100 font-bold fontPara">Image</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-100 text-slate-700 bg-slate-100">Title</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-100 text-slate-700 bg-slate-100">Price</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-100 text-slate-700 bg-slate-100">Category</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-100 text-slate-700 bg-slate-100"> Date</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-100 text-slate-700 bg-slate-100">Action</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-blue-gray-100 text-slate-700 bg-slate-100">Action</th>
                            </tr>
                            {loading && <tr className='flex justify-center items-center absolute left-[50%]  mt-6'>
                                <td>
                                    <Loader />
                                </td>

                            </tr>}
                            {getAllProducts && getAllProducts.map((item, index) => (
                                <tr key={index} className="text-blue-gray-300">
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 ">
                                        {index + 1}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        <div className="flex justify-center">
                                            <img className="w-20 " src={item.productImageUrl} alt="" />
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        {item.title}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        {item.price}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        {item.category}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        {item.date}
                                    </td>
                                    <td onClick={() => navigate(`/update-product/${item.id}`)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                                        Edit
                                    </td>
                                    <td onClick={()=>deleteProduct(item.id)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-gray-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                                        Delete
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
