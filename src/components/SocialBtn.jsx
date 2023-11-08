import '../assets/styles/SocialBtn.css'

export default function SocialBtn({value, href}) {
    return (
        <div className="btn">
            <a href={href}>{value}</a>
        </div>
    )
}