import React, { useState } from 'react'

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfrmPw, setCnfrmPw] = useState('');

    const handleBlur = () => {
        
    }

  return (
    <div>
        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <input type='password' placeholder='Confirm password' onChange={(e) => setCnfrmPw(e.target.value)}/>
        <button type='submit'>Submit</button>
    </div>
  )
}
