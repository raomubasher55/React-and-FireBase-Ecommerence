import React from 'react'
import "./SizeGuide.css"
const SizeGuide = () => {
  return (
    <div>
        <div className="sizeguide__section mt-32">
        <p className="title__sizeguide">Size Guide</p>
        <p className="title_helper_sizeguide">Below are the suggested Barney Bed sizes based on measurements of your dog from <span className="bold__out">nose to base of <br/>tail.<br/></span>
        If you are still unsure of the best size for your breed of dog, please contact one of our customer service<br/> staff on the online chat, in the bottom left corner of the screen.</p>
        <div className="dog__sizes">
            <div className="dog__lbl">
                <img src="https://barneybed.com.au/cdn/shop/files/6242476aa29c1108d76cbe90_small_scaled.png?v=1690990160&width=300"/>
                <div className="details__wrapper">
                <p className="">SMALL BARNEY BED</p>
                <div className="typical">
                    <p className="light__txt">FOR DOGS <br/>LESS THAN</p>
                    <p className="doglbl__bold">48CM</p>
                </div>
                <p>TYPICAL BREEDS</p>
                <p className="underlined__dogname">Pomeranian</p>
                <p className="underlined__dogname">Chihuahua</p>
                <p className="underlined__dogname">Miniature Dachshund</p>
                <p className="underlined__dogname">Yorkshire Terrier</p>
                <p className="underlined__dogname">Maltese</p>
                <button className="see_this_bed">See this bed</button>
            </div>
            </div>
            <div className="dog__lbl">
                <img src="https://barneybed.com.au/cdn/shop/files/6242477f0813cf2620bb9bfd_medium_scaled.png?v=1690990176&width=300"/>
                <div className="details__wrapper">
                <p>MEDIUM BARNEY BED</p>
                <div className="typical">
                    <p className="light__txt">FOR DOGS <br/>LESS THAN</p>
                    <p className="doglbl__bold">63CM</p>
                </div>
                <p>TYPICAL BREEDS</p>
                <p className="underlined__dogname">Cavoodle</p>
                <p className="underlined__dogname">Cocker Spaniel</p>
                <p className="underlined__dogname">Beagle</p>
                <p className="underlined__dogname">Dachshund</p>
                <p className="underlined__dogname">Pembroke Welsh Corgi</p>
                <button className="see_this_bed">See this bed</button>
            </div>
            </div>
            <div className="dog__lbl">
                <img src="https://barneybed.com.au/cdn/shop/files/6242479d8cc16a4b905c0199_large_scaled_noarrows.png?v=1690990194&width=300"/>
                <div className="details__wrapper">
                <p>LARGE BARNEY BED</p>
                <div className="typical">
                    <p className="light__txt">FOR DOGS <br/>LESS THAN</p>
                    <p className="doglbl__bold">96CM</p>
                </div>
                <p>TYPICAL BREEDS</p>
                <p className="underlined__dogname">Golden Retriever</p>
                <p className="underlined__dogname">Labrador</p>
                <p className="underlined__dogname">Groodle</p>
                <p className="underlined__dogname">Husky</p>
                <p className="underlined__dogname">Boxer</p>
                <button className="see_this_bed">See this bed</button>
            </div>
            </div>
            <div className="dog__lbl">
                <img src="https://barneybed.com.au/cdn/shop/files/624247b2cd3b422de7348848_xl_scaled.png?v=1690990211&width=300"/>
                <div className="details__wrapper">
                <p>XL BARNEY BED</p>
                <div className="typical">
                    <p className="light__txt">FOR DOGS <br/>LESS THAN</p>
                    <p className="doglbl__bold">128CM</p>
                </div>
                <p>TYPICAL BREEDS</p>
                <p className="underlined__dogname">Greyhound</p>
                <p className="underlined__dogname">Alaskan Malamute</p>
                <p className="underlined__dogname">Rottweiler</p>
                <p className="underlined__dogname">Bullmastiff</p>
                <p className="underlined__dogname">Dogue de Bordeaux</p>
                <button className="see_this_bed">See this bed</button>
                </div>
            </div>
            <div className="dog__lbl dog_lbl_5 ">
                <img src="https://barneybed.com.au/cdn/shop/files/624247c5734c0aa780ab04da_xxl_scaled.png?v=1690990263&width=300"/>
                <div className="details__wrapper">
                <p>XXL BARNEY BED</p>
                <div className="typical">
                    <p className="light__txt">FOR DOGS <br/>MORE THAN</p>
                    <p className="doglbl__bold">128CM</p>
                </div>
                <p>TYPICAL BREEDS</p>
                <p className="underlined__dogname">Great Dane</p>
                <p className="underlined__dogname">Newfoundland</p>
                <p className="underlined__dogname">Saint Bernard</p>
                <p className="underlined__dogname">Bernese Mountain Dog</p>
                <p className="underlined__dogname">Mastiff</p>
                <button className="see_this_bed">See this bed</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SizeGuide
