import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [nationality, setNationality] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [navigate, setNavigate] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5001/api/account/register", {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
        nationality,
        dateOfBirth
      })
    });

    setNavigate(true);
  }

  if (navigate) {
    return <Navigate to="/login" />
  }


  return (
    <div className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb_3 fw-normal">Register Page</h1>

        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" required />
        <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" required />
        <br />
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="confirm password" required />
        <br />
        <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} className="form-control" placeholder="nationality" />
        <br />
        <input type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="form-control" placeholder="Date Of Birth" />
        <br />
        <button type="submit" className="w-100 btn btn-lg btn-primary">Sign In</button>
      </form>
    </div>
  )
}

export default Register