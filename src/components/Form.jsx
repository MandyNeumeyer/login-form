import { useState, useEffect } from 'react'
import Success from './Success';
import './Form.css'
import { FaRegPaperPlane, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Siren from '../img/siren.gif'



const Form = () => {
    const initialValue = {
        username: "",
        email: "",
        password: "",
        password2: ""
    }
    const [formValues, setFormValues] = useState(initialValue);
    const [passwordShown, setPasswordShown] = useState(false)
    const [passwordRepeatShown, setPasswordRepeatShown] = useState(false)
    const [isSignedUp, setSignedUp] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [foundError, setFoundError] = useState({});


    useEffect(() => {
        if (Object.keys(foundError).length === 0 && isSubmitted) {
            setSignedUp(true)
        }
    }, [foundError, isSubmitted])

    const styleIcons = {
        position: 'relative',
        left: '25rem',
        bottom: '1.9rem',
        fontSize: '1.4rem',
        color: 'rgb(155, 154, 154)',
    }

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target
        setFormValues({
            ...formValues, [name]: value
        })
        console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFoundError(validate(formValues))
        setIsSubmitted(true)
    };

    const isEmail = (email) => {
        //eslint-disable-next-line 
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    const validate = (value) => {
        const errors = {}
        if (!value.username) {
            errors.username = "username can not be blank"

        } if (!value.email) {
            errors.email = "email can not be blank"

        } else if (!isEmail(value.email)) {
            errors.email = "please provide a valid e-mail"
            setFormValues({
                ...formValues, email: ""
            })

        } if (!value.password) {
            errors.password = "please provide a password"

        } else if (value.password.length < 4) {
            errors.password = "pw must have at least 4 characters"
            setFormValues({
                ...formValues, password: "", password2: ""
            })
        } else if (value.password !== value.password2) {
            errors.password2 = "passwords must match"
            setFormValues({
                ...formValues, password2: ""
            })
        }
        return errors

    }

    if (!isSignedUp) {
        return (
            <div className="Form">
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Sign up</h1>
                    <div>
                        <label htmlFor="username">Name</label>
                        <input type="text"
                            id="username"
                            placeholder="please enter your name"
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
                        <input type={passwordShown ? "text" : "password"}
                            id="password"
                            placeholder="create a password with min 4 char"
                            name="password"
                            onChange={handleChange}
                            value={formValues.password}
                        />
                        <span onClick={() => setPasswordShown(!passwordShown)}>{passwordShown ?
                            <FaRegEye style={styleIcons} />
                            : <FaRegEyeSlash style={styleIcons} />}
                        </span>
                    </div>
                    <div>
                        <label htmlFor="password2">Confirm Password</label>
                        <input type={passwordRepeatShown ? "text" : "password"}
                            id="password2"
                            placeholder="confirm your password"
                            name="password2"
                            onChange={handleChange}
                            value={formValues.password2}
                        />
                        <span onClick={() => setPasswordRepeatShown(!passwordRepeatShown)}>{passwordRepeatShown ?
                            <FaRegEye style={styleIcons} />
                            : <FaRegEyeSlash style={styleIcons} />}
                        </span>
                    </div>
                    <button type="submit"><FaRegPaperPlane /></button>
                    <span>Already have an account? <a href="/#">login here</a></span>
                </form>
                <div className="errors" style={{ visibility: Object.keys(foundError).length === 0 ? 'hidden' : 'visible', color: 'red' }}>
                    <div className="siren">
                        <img src={Siren} alt="siren-error-warning" />
                        <h2>ERRORS</h2>
                    </div>
                    <div className="error-details">
                        <pre>{foundError.username}</pre>
                        <pre>{foundError.email}</pre>
                        <pre>{foundError.password}</pre>
                        <pre>{foundError.password2}</pre>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Success user={formValues.username} email={formValues.email} />
    }

}

export default Form
