import '../assets/styles/Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Project from './Project'
import { desktop1, desktop2 } from '../utils/imageImports'

const projects = [
    {
        name: 'vyzon',
        heading: ['Programming', 'Language'],
        images: [desktop1, desktop2],
        github: 'https://github.com/Amanjot-001/Vyzon',
        website: 'https://vyzon.netlify.app/',
    },
    {
        name: 'galaxy',
        heading: ['Integrated', 'Learning', 'Platform'],
        github: 'https://github.com/Amanjot-001/Galaxy-main',
    },
    {
        name: 'semicolon',
        heading: ['Touch', 'typing', 'Platform'],
        github: 'https://github.com/Amanjot-001/Semicolon',
        website: 'https://semicolon23.onrender.com/',
    },
    {
        name: 'code convertor',
        heading: ['Transform', 'Code'],
        github: 'https://github.com/Amanjot-001/Code-Converter',
        website: 'https://code-converter-irhf.onrender.com/',
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