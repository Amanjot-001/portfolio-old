import '../assets/styles/Project.css'

export default function Project({ data }) {
    return (
        <div className="project">
            <div className="heading">
                {data.heading.map((text, index) => (
                    <div key={index}>{text}</div>
                ))}
            </div>

        </div>
    )
}