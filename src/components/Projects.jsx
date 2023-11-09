import '../assets/styles/Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
    return (
        <div className="projects">
            <div className="nav">
                <div className="nav-content">
                    <div className="nav-item">
                    <FontAwesomeIcon icon={faPlay} />
                    Vyzon &nbsp; &nbsp;
                    </div>
                </div>
            </div>
            <div className="project-show"></div>
        </div>
    )
}