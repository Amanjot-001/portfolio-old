import { useState } from 'react';
import '../assets/styles/Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import desktop1 from '../assets/images/vyzon/desktop-1.png'

export default function Project({ data }) {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevClick = () => {
        setCurrentImage((prevIndex) => (prevIndex === 0 ? data.images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImage((prevIndex) => (prevIndex === data.images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="project">
            <div className="heading">
                {data.heading.map((text, index) => (
                    <div key={index}>{text}</div>
                ))}
            </div>
            <div className="images">
                <img src={desktop1} alt={`Image ${currentImage + 1}`} />
            </div>
            <div className="img-btns">
                <div className="left" onClick={handlePrevClick}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className="right" onClick={handleNextClick}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
        </div>
    )
}