import './Success.css'
import { FaRegPaperPlane } from 'react-icons/fa';



const Success = ({ user, email }) => {
    const upperCaseFirst = user[0].toUpperCase() + user.slice(1)

    return (
        <div className="Success">
            <FaRegPaperPlane size={60} />
            <div className="greeting">
                <h2>Welcome {upperCaseFirst}</h2>
            </div>
            <div>
                <p>We have send an email to:</p>
                <p className="sendTo">{email}</p>
                <p>Please confirm!</p>
            </div>
        </div>
    )
}
export default Success
