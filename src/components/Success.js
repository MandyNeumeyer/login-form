import React from 'react'
import './Success.css'
import { FaRegPaperPlane } from 'react-icons/fa';



const Success = ({user, email}) => {
    return (
        <div className="Success">
            <FaRegPaperPlane size={60} />
            <div className="greeting">
                <h2>Welcome</h2> <h3 className="magenta magenta-user">  {user}</h3>
            </div>
            <div className="confirm">
            <p>We have send an email to:</p>
            <p className="yellow">{email}</p>
            <p>Please confirm!</p>
            </div>
        </div>
    )
}
export default Success
