import { useState } from 'react';
import '../assets/styles/Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Project({ data }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [hoveredDescBtn, setHoveredDescBtn] = useState('short');

    const handlePrevClick = () => {
        setCurrentImage((prevIndex) => (prevIndex === 0 ? data.images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImage((prevIndex) => (prevIndex === data.images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDescBtnHover = (btnType) => {
        setHoveredDescBtn(btnType);
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
                        <FontAwesomeIcon icon={faGlobe} style={{ color: '#000' }} />
                        website
                    </a>
                    <a className="github" href={data.github}>
                        <FontAwesomeIcon icon={faGithub} style={{ color: '#000' }} />
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
            <div className="desc">
                <div className="desc-btn">
                    <div
                        className={`short ${hoveredDescBtn === 'short' ? 'selected' : ''}`}
                        onMouseEnter={() => handleDescBtnHover('short')}
                    >
                        short
                    </div>
                    <div
                        className={`long ${hoveredDescBtn === 'long' ? 'selected' : ''}`}
                        onMouseEnter={() => handleDescBtnHover('long')}
                    >
                        long
                    </div>
                </div>
                {hoveredDescBtn === 'short' ? (
                    <div className="short-desc">
                        <p>Made my own programming language from scratch.</p>
                    </div>
                ) : (
                    <div className="long-desc">
                        <p>support for basic operations like functions, loops, conditionals, and oops.</p>
                        <p>build tokenizer, parser, interpreter for the language showcasing language designing skills.</p>
                        <p>hosted on netlify to make others able to test it out without any hassle.</p>
                    </div>
                )}
            </div>
        </div>
    )
}