import '../assets/styles/Header.css'
import SocialBtn from './SocialBtn'

export default function Header() {
    return (
        <div className="header">
            <div className="marquee">
                <div className="marquee-text">Living in India / third year engineering student.</div>
                <div className="marquee-text">Living in India / third year engineering student.</div>
            </div>
            <div className="bg-1"></div>
            <div className="bg-2"></div>
            <div className="main">
                <div className="greet">
                    <p>Hi I'M <span>AMANJOT SINGH</span></p>
                </div>
                <div className="info">
                    <p>
                        Enthusiastic computer science engineering student deeply passionate about programming, web development, and software engineering. Join me as I unveil a world of skills and projects in the realm of technology.
                    </p>
                </div>
                <div className="socials">
                    <SocialBtn value={'Resume'} href={'#'} />
                    <SocialBtn value={'Github'} href={'https://github.com/Amanjot-001'} />
                    <SocialBtn value={'Twitter'} href={'https://twitter.com/Amanjotsingh001'} />
                    <SocialBtn value={'LinkedIn'} href={'https://www.linkedin.com/in/amanjot-singh-2298a6232/'} />
                </div>
            </div>
        </div>
    )
}