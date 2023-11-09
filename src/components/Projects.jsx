import '../assets/styles/Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const projects = [
    {
        name: 'vyzon'
    },
    {
        name: 'galaxy'
    },
    {
        name: 'semicolon'
    },
    {
        name: 'code convertor'
    },
]

export default function Projects() {
    return (
        <div className="projects">
            <div className="nav">
                <div className="nav-content">
                    {projects.map((project, index) => (
                        <div key={index} className="nav-item">
                        <FontAwesomeIcon icon={faPlay} />
                        {project.name} &nbsp; &nbsp;
                      </div>
                    ))}
                </div>
            </div>
            <div className="project-show"></div>
        </div>
    )
}