import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../styles/Login.css'
import axios from '../api/axios';

const LOGIN_URL = '/api/account/login';

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [navigate, setNavigate] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        // const response = await fetch("http://localhost:5001/api/account/login", {
        //     method: 'POST',
        //     headers: { "Content-Type": 'application/json' },
        //     credentials: 'include',
        //     body: JSON.stringify({
        //         email,
        //         password,
        //     })
        // });
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response.data));;
          
            setNavigate(true);
            props.setEmail(email)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Wrong username  or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
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
            <p>{errMsg}</p>      
        </div>
    )
}


export default Login