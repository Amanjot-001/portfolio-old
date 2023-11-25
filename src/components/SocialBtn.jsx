import '../assets/styles/SocialBtn.css'
import { useState } from 'react'

export default function SocialBtn({ value, href }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (event) => {
        setIsClicked(true);
        event.target.classList.add('clicked');
        setTimeout(() => {
            setIsClicked(false);
            event.target.classList.remove('clicked');
        }, 1000);
    };

    return (
        <a
            className='btn'
            href={href}
            onClick={handleClick}
        >
            {value}
        </a>
    )
}