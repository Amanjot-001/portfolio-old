import '../assets/styles/Label.css'

export default function Label({title}) {
    return (
        <div className="label">
            <div className="empty1"></div>
            <h1>{title}</h1>
            <div className="empty2"></div>
        </div>
    )
}