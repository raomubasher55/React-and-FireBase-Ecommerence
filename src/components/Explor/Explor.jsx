import React from 'react'
import "./Explor.css"

const Explor = () => {
  return (
    <div>
      <div className="explore__section mt-20">
        <p className="title title__explore   ">Explore The Range</p>
        <div className="exploreimages__wrapper">
            <div className="exploreImg">
                <img src="https://barneybed.com.au/cdn/shop/files/6379ccf4ceb5f721527e610b_100A4462_2_0d79203c-9119-4d01-8714-f4ae7d6d644c_1024x1024_3_1.png?v=1720317705&width=2000"/>
                <div className="options">
                    <p className="title explore__small">Barney Beds</p>
                    <p className="normal__txt">Our signature bed, crafted with human grade high-density memory foam for ultimate joint support and unmatched comfort.</p>
                </div>
            </div>
            <div className="exploreImg">
            <img src="https://barneybed.com.au/cdn/shop/files/curlteddy_medium_00f62b3d-bc2e-4bd5-95fb-fee20098e5c6.webp?v=1720317692&width=2000"/>
            <div className="options">
                <p className="title explore__small">BarneyCurl Beds</p>
                <p className="normal__txt">Our revolutionary round orthopedic dog designed specifically for donut sleepers.</p>
            </div>
            </div>
            <div className="exploreImg">
            <img src="https://barneybed.com.au/cdn/shop/files/matcha.webp?v=1720415171&width=2000"/>
            <div className="options">
                <p className="title explore__small">Covers & Kits</p>
                <p className="normal__txt">Upgrade your Barney Bed with our selection of covers the Boucle cover adds a luxurious touch, Golden Teddy cover is a vintage dream.</p>
            </div>
            </div>
            <div className="exploreImg">
            <img src="https://barneybed.com.au/cdn/shop/files/blanket.webp?v=1720331413&width=2000"/>
            <div className="options">
                <p className="title explore__small">Blankets</p>
                <p className="normal__txt">The world's softest, coziest blankets that repel dog hair effortlessly.</p>
            </div>
            </div>
        </div>
        <p className="title__helper helper">Also Featured on:</p>
        <div className="brands">
            <img src="https://barneybed.com.au/cdn/shop/files/The-Age-Logo-Stacked.png?v=1692201954&width=200"/>
            <img src="https://barneybed.com.au/cdn/shop/files/download.png?v=1692201975&width=200"/>
            <img src="https://barneybed.com.au/cdn/shop/files/Mamamia.png?v=1692202007&width=200"/>
            <img src="https://barneybed.com.au/cdn/shop/files/fox_logo.svg?v=1690852829&width=200"/>
        </div>
        </div>
    </div>
  )
}

export default Explor
