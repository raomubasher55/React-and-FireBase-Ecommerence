import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import "./Asked.css"

const  AskedQA = () => {
  return (
    <div>
       <div className="newsAsked__section pt-32">
        <div className="askedQA__section">
            <p className="qa_fancytxt_xl">Frequently Asked Questions</p>
            <p className="qa_normal_txt">Need further information before you purchase? We have pretty much everything answered below, if not you can<br/> always ask our friendly customer service staff in the live chat (bottom left corner of the page).</p>
        <div className="labels">
            <div className="label">
            <p className="qa_fancytxt_large">Shipping</p>
            <FontAwesomeIcon icon={faAngleDown} className="arrowDown"/>
            </div>
            <div className="label">
            <p className="qa_fancytxt_large">Returns & Exchanges</p>
            <FontAwesomeIcon icon={faAngleDown} className="arrowDown"/>
            </div>
            <div className="label">
            <p className="qa_fancytxt_large">Warranty</p>
            <FontAwesomeIcon icon={faAngleDown} className="arrowDown"/>
            </div>
            <div className="label">
            <p className="qa_fancytxt_large">About the Barney Bed</p>
            <FontAwesomeIcon icon={faAngleDown} className="arrowDown"/>
            </div>
            <div className="label">
            <p className="qa_fancytxt_large">About the Barney Covers</p>
            <FontAwesomeIcon icon={faAngleDown} className="arrowDown"/>
            </div>
            <div className="label">
            <p className="qa_fancytxt_large">Care & Washing</p>
            <FontAwesomeIcon icon={faAngleDown} className="arrowDown"/>
            </div>
            <div className="label">
            <p className="qa_fancytxt_large">Our Company</p>
            <FontAwesomeIcon icon={faAngleDown} className="arrowDown"/>
            </div>
            <div className="label">
            <p className="qa_fancytxt_large">Payments</p>
            <FontAwesomeIcon icon={faAngleDown} className="arrowDown"/>
            </div>
        </div>
        </div>
        <div className="newsemail__section">
            <p className="qa_fancytxt_xl">Get Deals & New Releases</p>
            <p className="qa_normal_txt">Be the first to know about exclusive offers and new products</p>
            <div className="submit__email">
            <input type="text" placeholder="Enter your email" className="email__holder"/>
            <button>Submit</button>
            </div>
            <p className="qa_normal_txt">We respect your privacy. Unsubscribe at any time!</p>
        </div>
        </div>
    </div>
  )
}

export default AskedQA
