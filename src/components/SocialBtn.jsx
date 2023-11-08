import '../assets/styles/SocialBtn.css'

export default function SocialBtn({value, href}) {
    return (
            <a className='btn' href={href}>{value}</a>
    )
}