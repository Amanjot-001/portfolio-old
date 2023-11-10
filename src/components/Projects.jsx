import '../assets/styles/Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Project from './Project'

const projects = [
    {
        name: 'vyzon',
        heading: ['Programming', 'Language'],
        images: ['../assets/images/vyzon/desktop-1.png', '../assets/images/vyzon/desktop-2.png']
    },
    {
        name: 'galaxy',
        heading: ['Integrated', 'Learning', 'Platform'],
    },
    {
        name: 'semicolon',
        heading: ['Touch', 'typing', 'Platform'],
    },
    {
        name: 'code convertor',
        heading: ['Transform', 'Code'],
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
            <div className="project-show">
                <Project data={projects[0]} />
            </div>
        </div>
    )
}