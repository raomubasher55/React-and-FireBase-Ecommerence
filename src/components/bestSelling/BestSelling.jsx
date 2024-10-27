import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import "./BestSelling.css"

const BestSelling = () => {
  return (
    <div>
          <div className="bestselling__section">
        <p className="darkgrey__fancy">Shop Our Best-Selling Covers & Kits</p>
        <p className="lightgrey__thin">Personalize your dog's bed with our washable, interchangeable covers. Easily remove for a quick wash and refresh anytime.</p>
        <div className="options__resize">
            <FontAwesomeIcon className="right__angle" icon={faAngleRight} />
            <FontAwesomeIcon className="left__angle" icon={faAngleLeft} />
            <p className="link normal__txt">Shop All</p>
            </div>
            <div className="sales">
                <div className="sale">
                    <img className="barney__bed" src="https://barneybed.com.au/cdn/shop/files/barneybed_matcha_bestseller.webp?v=1720332053"/>
                    <div className="reviews">
                    <p className="darkgrey__fancy_small">Teddy Cover in Golden</p>
                    <p className="lightgrey__thin_small">From $199.00 AUD</p>
                    <div className="star__txt">
                    <img className="stars" src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/622994b13c9fc2b653c5bd83_5stars.svg"/>
                    <p className="normal__txt">31 reviews</p>
                    </div>
                    </div>
                </div>
                <div className="sale sale__hideb">
                    <img className="barney__bed" src="https://barneybed.com.au/cdn/shop/files/barneybed_curlricepudding_bestseller.webp?v=1720332052"/>
                    <div className="reviews">
                    <p className="darkgrey__fancy_small">Barnerycurl cover in Matcha</p>
                    <p className="lightgrey__thin_small">From $295.00 AUD</p>
                    </div>
                </div>
                <div className="sale sale__hideb">
                    <img className="barney__bed" src="https://barneybed.com.au/cdn/shop/files/Rectangle_1327_1.png?v=1720317040"/>
                    <div className="reviews">
                    <p className="darkgrey__fancy_small">Boucle Cover</p>
                    <p className="lightgrey__thin_small">From $175.00 AUD</p>
                    <div className="star__txt">
                    <img className="stars" src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/622994b13c9fc2b653c5bd83_5stars.svg"/>
                    <p className="normal__txt">58 reviews</p>
                    </div>
                    </div>
                </div>
                <div className="sale sale__hidea">
                    <img className="barney__bed" src="https://barneybed.com.au/cdn/shop/files/Rectangle_1358_1.png?v=1720317371"/>
                    <div className="reviews">
                    <p className="darkgrey__fancy_small">Barnecyles Cover in Sugarloaf</p>
                    <p className="lightgrey__thin_small">From $155.00 AUD</p>
                    <div className="star__txt">
                    <img className="stars" src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/622994b13c9fc2b653c5bd83_5stars.svg"/>
                    <p className="normal__txt">34 reviews</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestSelling
