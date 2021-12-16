import React, { useState } from 'react'
import Success from './Success';
import './Form.css'
import { FaRegPaperPlane} from 'react-icons/fa';



const Form = () => {
    const initialValue = {
        username: "",
        email: "",
        password: "",
        password2:""
    }
    const [formValues, setFormValues] = useState(initialValue);
    const [isSignedUp, setSignedUp]=useState(false)

    
    const handleChange = (e) => {
        console.log(e.target);
        const {name, value}=e.target
        setFormValues({
            ...formValues, [name]:value
        })
        console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSignedUp(!isSignedUp)
    };

    if(!isSignedUp){ 
    return (
        <div className="Form">
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <div>
                    <label htmlFor="username">Name</label>
                    <input type="text"
                        id="username"
                        placeholder="pls enter your name"
                        name="username"
                        onChange={handleChange}
                        value={formValues.username}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        id="email"
                        placeholder="pls enter your email"
                        name="email"
                        onChange={handleChange}
                        value={formValues.email}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        placeholder="create a passord"
                        name="password"
                        onChange={handleChange}
                        value={formValues.password}
                    />
                </div>
                <div>
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password"
                        id="password2"
                        placeholder="confirm your passord"
                        name="password2"
                        onChange={handleChange}
                        value={formValues.password2}
                    />
                </div>
                <button type="submit"><FaRegPaperPlane/></button>
                <span>Already have an account? <a href="#">login here</a></span>
            </form>
        </div>
    )
    } else {
        return <Success user={formValues.username} email={formValues.email} />
}

}

export default Form
