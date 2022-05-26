import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../styles/Login.css'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [navigate, setNavigate] = useState(false);


    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5001/api/account/login", {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
            })
        });

        const content = await response.json();
   
        setNavigate(true);
        props.setEmail(content.email)
    }
 
  if (navigate) {
    return <Navigate to="/home" />
  }

    return (
        <div className="form-signin">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <input type="email" className="form-control" placeholder="Email address" required
                    onChange={e => setEmail(e.target.value)} />

                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)} />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    )
}


export default Login