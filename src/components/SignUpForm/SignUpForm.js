import { useState } from 'react'
import { updateUser } from '../../utilities/users-services'

export default function SignUpForm({ setUser }) {
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
    })

    const [error, setError] = useState('')

    function handleChange(e) {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
        setError('')
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const formData = { ...signUpData }
            delete formData.confirm
            const updatedUser = await updateUser(formData)
            setUser(updatedUser)
        } catch {
            setError('Sign Up Failed - Try Again')
        }
    }
    render() {
        const disable = signUpData.password !== signUpData.confirm;
        return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={signUpData.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={signUpData.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={signUpData.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={signUpData.confirm} onChange={handleChange} required />
                    <button type="submit" disabled={disable}>Sign Up</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
        );
    }
}å