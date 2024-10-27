import React from 'react'
import img from '../../assets/categorys/watch.png'
import { useNavigate } from 'react-router-dom'

const category = [
  {
    image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
    name: 'fashion'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
    name: 'shirt'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
    name: 'bag'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
    name: 'mobile'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
    name: 'laptop'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
    name: 'shoes'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
    name: 'home'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
    name: 'books'
  }
]

const Category = () => {
  const navigate = useNavigate();

  return (
    <>

      <div>
        <div className="flex flex-col mt-5">
          {/* main 1 */}
          <div className="flex pt-12 overflow-x-scroll lg:justify-center  hide-scroll-bar">
            {/* main 2  */}
            <div className="flex gap-12 ">
              {/* category  */}
              {category.map((item, index) => {
                return (
                  <div key={index} onClick={() => navigate(`/category/${item.name}`)} className="flex flex-col cursor-pointer items-center border border-gray-300 rounded-full h-40 w-40 hover:shadow-lg ">
                    <img src={item.image} alt="Laptops" className="m-2 object-cover w-full" />
                    <span className='font-bold'>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* style  */}
        <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
      </div>
    </>
  )
}

export default Category
