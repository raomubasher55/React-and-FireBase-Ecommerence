import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import "./Review.css"

const CustomerReviews = () => {
  return (
    <div>
      <div className="reviews__section mt-48">
        <div className="peoplesay__section">
            <p className="title__reviews">160,000 Dogs & 120,000 Humans Love their Barney Beds!</p>
            <div className="customer_reviews_scroll">
            <p>More Customer Reviews</p>
            <FontAwesomeIcon className="right__angle rightangle__reviews" icon={faAngleRight} />
            <FontAwesomeIcon className="left__angle leftangle__reviews" icon={faAngleLeft} />
            </div>
            <div className="reviews__wrapper">
                <div className="review review_a">
                    <div className="top">
                    <img className="stars" src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/622994b13c9fc2b653c5bd83_5stars.svg"/>
                    <p>Everyone must say this but its honestly more comfortable than my own bed. Fits perfectly in the back of my Land Rover as a bonus.</p>
                    </div>
                    <div className="white__space"></div>
                    <div className="bottom">
                    <p className="small__txt">Ingrid S.</p>
                    <div className="verified">
                        <img src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/6229977e3128f344da6bbefb_verified.svg"/>
                        <p className="light__txt">Verified Barney Bed Customer</p>
                    </div>
                    <p>Purchased the <span>Small Barney Bed</span></p>
                    </div>
                </div>
                <div className="review review_b">
                    <div className="top">
                    <img className="stars" src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/622994b13c9fc2b653c5bd83_5stars.svg"/>
                    <p>Beautiful dog bed, so comfy Im laying on it with one of our pups while writing this review! Order arrived within 48 hours! Very happy!</p>
                    </div>
                    <div className="white__space"></div>
                    <div className="bottom">
                    <p className="small__txt">Maz M.</p>
                    <div className="verified">
                        <img src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/6229977e3128f344da6bbefb_verified.svg"/>
                        <p className="light__txt">Verified Barney Bed Customer</p>
                    </div>
                    <p>Purchased the <span>XXL Barney Bed</span></p>
                    </div>
                </div>
                <div className="review review_b">
                    <div className="top">
                <img className="stars" src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/622994b13c9fc2b653c5bd83_5stars.svg"/>
                <p>My pugaliers love their Barney Bed and love having there head resting higher! They have chewed up every other bed I bought but not this one! Worth the money for comfort & quality!</p>
                </div>
                <div className="white__space"></div>
                <div className="bottom">
                <p className="small__txt">James G.</p>
                    <div className="verified">
                        <img src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/6229977e3128f344da6bbefb_verified.svg"/>
                        <p className="light__txt">Verified Barney Bed Customer</p>
                    </div>
                    <p>Purchased the <span>Large Barney Bed</span></p>
                </div>
                </div>
            </div>
        </div>
        <div className="viewpets__section">
            <p className="title title__viewpets">For All Paws Large & Small</p>
            <p className="light__txt">5 sizes to suit every dog - including the Epic XXL, the world's largest dog bed! Unsure what size to choose? Check the SIZE GUIDE for your dog's specific breed. All our beds include a cool neutral gray cover.</p>
            <div className="petsshows__section">
                <div className="row">
                    <div className="box boxA">
                        <p className="fancy__txt txt__boxA">Introducing</p>
                        <img className="logo" src="https://cdn.shopify.com/s/files/1/0092/3136/8270/files/barneycurl-logo.svg?v=1710803782"/>
                        <p className="light__txt light__boxA">From the inventors of the Original Barney Bed these are the only round orthopedic memory foam dog beds in the world with a patented design. Available in Medium and Large sizes.</p>
                    </div>
                    <div className="box">
                        <img src="https://barneybed.com.au/cdn/shop/files/curl-medium-moose.webp?v=1710803360&width=500"/>
                        <div className="clicktoview__wrapper">
                        <p><span className="bold">MEDIUM</span> BARNEY CURL</p>
                        <p className="bold">CLICK TO VIEW</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://barneybed.com.au/cdn/shop/files/curl-large-barney.webp?v=1710803360&width=500"/>
                        <div className="clicktoview__wrapper">
                        <p><span className="bold">LARGE</span> BARNEY CURL</p>
                        <p className="bold">CLICK TO VIEW</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="box">
                        <img src="https://barneybed.com.au/cdn/shop/files/61f700794b6cc50e23aa28c2_barneybed_small_5b85ffc8-e75a-424b-996c-17bf8324d00a.png?v=1691020523&width=500"/>
                        <div className="clicktoview__wrapper">
                        <p><span className="bold">SMALL</span> BARNEY BED</p>
                        <p className="bold">CLICK TO VIEW</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://barneybed.com.au/cdn/shop/files/61f700dc2d4b71d247fa43dc_barneybed_medium_0b960193-998b-4053-8f9b-6804adff8ddb.png?v=1691020641&width=500"/>
                        <div className="clicktoview__wrapper">
                        <p><span className="bold">MEDIUM</span> BARNEY BED</p>
                        <p className="bold">CLICK TO VIEW</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://barneybed.com.au/cdn/shop/files/61f7011ac9a582204b026214_barney_bed_large_30df96b2-e527-4632-9870-d2aa4502a0b1.png?v=1691020663&width=500"/>
                        <div className="clicktoview__wrapper">
                        <p><span className="bold">LARGE</span> BARNEY BED</p>
                        <p className="bold">CLICK TO VIEW</p>
                        </div>
                    </div>
                </div>
                <div className="row rowC">
                <div className="box">
                        <img src="https://barneybed.com.au/cdn/shop/files/61f701847fbc53b977b77681_barneybed_xlarge-p-500.png?v=1691020676&width=500"/>
                        <div className="clicktoview__wrapper">
                        <p><span className="bold">XL</span> BARNEY BED</p>
                        <p className="bold">CLICK TO VIEW</p>
                        </div>
                </div>
                <div className="box">
                        <img src="https://barneybed.com.au/cdn/shop/files/61f70333e6ce5e25bf012da3_barneybed_xxlarge-p-500.png?v=1691020706&width=500"/>
                        <div className="clicktoview__wrapper">
                        <p><span className="bold">XXL</span> BARNEY BED</p>
                        <p className="bold">CLICK TO VIEW</p>
                        </div>
                </div>  
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CustomerReviews
