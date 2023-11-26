import '../assets/styles/SocialBtn.css'

export default function SocialBtn({ value, href }) {

    const handleClick = (event) => {
        event.target.classList.add('clicked');
        setTimeout(() => {
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