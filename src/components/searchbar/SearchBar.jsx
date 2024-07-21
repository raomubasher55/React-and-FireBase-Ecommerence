import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [product, setProduct] = useState();
    const { getAllProducts } = useMyContext();

    const filterSearchData = getAllProducts.filter((obj) => obj.title.toLowerCase().includes(query)).slice(0, 8);

    const navigate = useNavigate();
    const handleOnChange = (e) => {
        setQuery(e.target.value)
    }



    return (
        <>
            <div className="bg-card text-card-foreground p-4 rounded-lg max-w-lg mx-auto  ">
                <div className="relative">
                    <input
                        type="search"
                        value={query}
                        onChange={handleOnChange}
                        placeholder="search"
                        className="px-4 py-1 border rounded-full bg-input text-foreground"
                    />

                </div>

                <div className=" flex justify-center">
                    {query && <div className="block absolute bg-white shadow-lg w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
                        {filterSearchData.length > 0 ?
                            <>
                                {filterSearchData.map((item, index) => {
                                    return (
                                        <div key={index} className="py-2 px-2 cursor-pointer"
                                            onClick={() => navigate(`/product-info/${item.id}`)}>
                                            <div className="flex items-center gap-2">
                                                <img className="w-10" src={item.productImageUrl} alt="" />
                                                {item.title}
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            <>
                                <div className="flex justify-center">
                                    <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                                </div>
                            </>}
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default SearchBar
