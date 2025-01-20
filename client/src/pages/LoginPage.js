import React from 'react'
import { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function login(ev){
  ev.preventDefault();
 await fetch('http://localhost:4000/login', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  }
  return (
    <div>
        <form className='login' onSubmit={login}>
            <h1>Login</h1>
            <input type="text" placeholder='username' value={username}
             onChange={ev => setUsername(ev.target.value)} />

            <input type="password" placeholder='password' value={password}
             onChange={ev => setPassword(ev.target.value)} />

            <button>Login</button> 
        </form>
    </div>
  )
}

export default LoginPage
