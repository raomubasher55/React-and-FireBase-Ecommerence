import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import "./Header-2.css";
import "./Headerimg.css";


const Reviews = () => {
  return (
    <div>
          <div className="Header2__section">
            <p className="title">Your Dog's Forever Bed</p>
            <p className="title__helper">The Barney Bed is the ultimate blend of comfort, style, and everyday usability designed to keep it's shape and last your dog for years.</p>
            <div className="little__section">
                <div className="left__show">
                    <div className="image__slider">
                        <FontAwesomeIcon className="angle__right" icon={faAngleRight} />
                        <img className="pet__img img__1" src="https://barneybed.com.au/cdn/shop/files/arthur_large_b261b8d9-ee3c-4092-8a92-3ba0a0d94c21.webp?v=1720317344"/>
                        <FontAwesomeIcon className="angle__left" icon={faAngleLeft}/> 
                    </div>
                    <p className="shop__barney">Shop Large Barney Bed</p>
                    <p className="fancy__style__txt">SELECT YOUR BARNEY BED SHAPE & SIZE</p>
                    <div className="size__section">
                        <div className="bigbed__side">
                            <img className="side__beds" src="https://barneybed.com.au/cdn/shop/t/39/assets/barney.webp?v=138523939508167799721720320500"/>
                            <div className="size__circle">S</div>
                            <div className="size__circle">M</div>
                            <div className="size__circle size__bold">L</div>
                            <div className="size__circle">XL</div>
                            <div className="size__circle">XXL</div>
                        </div>
                        <div className="smallbed__side">
                        <img className="side__beds" src="https://barneybed.com.au/cdn/shop/t/39/assets/barneycurl.avif?v=102488471433859168251720320509"/>
                            <div className="size__circle">M</div>
                            <div className="size__circle">L</div>
                        </div>
                    </div>
                </div>
                <div className="right__show">
                    <p className="fancy__txt">Large Barney Bed</p>
                    <img className="stars__reviews" src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/622994b13c9fc2b653c5bd83_5stars.svg"/>
                    <p className="normal__txt">987 reviews</p>
                    <div className="breeds__section">
                        <div className="dog_line_art">
                        <p className="normal__txt">less than<span className="cm">96CM</span></p>
                        <img className="dog__line" src="https://barneybed.com.au/cdn/shop/files/large_dog_arrows_small.svg?v=1710629452"/>
                        </div>
                        <div className="breeds__list">
                            <p>Golden Retriever</p>
                            <p>Labrador</p>
                            <p>Groodle</p>
                            <p>Vizsla</p>
                            <p>Dalmation</p>
                            <p>Husky</p>
                            <p>Samoyed</p>
                            <p>Boxer</p>
                            <p>Poodle</p>
                            <p>German Shorthaired Pointer</p>
                        </div>
                    </div>
                    <img className="stars__reviews" src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/622994b13c9fc2b653c5bd83_5stars.svg"/>
                    <p className="normal__txt txt__quoted">"A great high end dog bed! Our golden retriever loves it."</p>
                    <p className="normal__txt"><span style={{fontWeight: 'bold'}}>Simon G.</span><img className="verify__badge" src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/6229977e3128f344da6bbefb_verified.svg"/> Verified Barney Bed Customer Purchased the <span className="underlined__txt">Barney Bed</span></p>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Reviews
