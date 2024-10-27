import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import "./VideoPart.css"

const VideoPart = () => {
  return (
    <div>
           <div className="videos__section">
        <p className="title">Barney in Action</p>
        <p className="title__helper">Explore Our Newest Videos: Dog Visits to the Barney Shop and More!</p>
        <div className="videos__wrapper">
            <FontAwesomeIcon className="angle__left angle" icon={faAngleLeft} />
            <FontAwesomeIcon className="angle__right angle" icon={faAngleRight} />
            <div className="video">
                <img src="https://images.videowise.com/cdn_v_i/L/custom-videos/thumbnails/1718313796816_b132eb60-0445-4481-ae06-e96e81ed46ef.webp"/>
            </div>
            <div className="video">
                <img src="https://images.videowise.com/cdn_v_i/L/custom-videos/thumbnails/1718313964002_b2d089c8-2f83-426a-962f-0e64155c544b.webp"/>
            </div>
            <div className="video">
                <img src="https://images.videowise.com/cdn_v_i/L/custom-videos/thumbnails/1718314203434_2b8eb23e-1db1-49f9-af66-6887c64485bc.webp"/>
            </div>
            <div className="video">
                <img src="https://images.videowise.com/cdn_v_i/L/custom-videos/thumbnails/1718314092185_78f0bf20-2d7f-4115-a933-a0ed6dd589f5.webp"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default VideoPart
