import { useState } from 'react';
import '../assets/styles/Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
                <img src={data.images[currentImage]} alt={`Image ${currentImage + 1}`} />
            </div>
            <div className="project-navs">
                <div className="links">
                    <a className="website" href={data.website}>
                        <FontAwesomeIcon icon={faGlobe} style={{color: '#000'}}/>
                        website
                    </a>
                    <a className="github" href={data.github}>
                        <FontAwesomeIcon icon={faGithub} style={{color: '#000'}}/>
                        source
                    </a>
                </div>
                <div className="btns">
                    <div className="left" onClick={handlePrevClick}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div className="right" onClick={handleNextClick}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </div>
            </div>
        </div>
    )
}