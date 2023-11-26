import '../assets/styles/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    return (
        <div className="navbar">
            <div className="left">
                <div className="logo">
                    <FontAwesomeIcon className='icon' icon={faCode} />
                </div>
                <div className="separator">|</div>
                <div className="menu">
                    MENU
                </div>
            </div>
            <div className="right contact">
                <FontAwesomeIcon icon={faComment} flip="horizontal" />
                <p className="text">CONTACT ME</p>
            </div>
        </div>
    )
}