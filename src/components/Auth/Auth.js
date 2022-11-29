import { useState, useContext } from 'react'
import axios from 'axios'

import AuthContext from '../../store/authContext'
//  two forms to collect auth data (register & login)
// state value to keep track of if they're registering or logging
// state values to keep track of their auth data as they enter it into the form
// onclick handlers to update the state values
// axios post to register o rlogin, sending ther user data on body 



const Auth = () => {
  const [register, setRegister] = useState(false)
  const [username, setUsername] = useState(' ')
  const [password, setPassword] = useState(' ')
  
  const authCtx = useContext(AuthContext)
  
  const handleAuth = (e) => {
    e.preventDefault()
    const body = {username, password}
    axios.post(`${register ? '/register' : '/login'}`, body)
    .then(res => {
      console.log(res.data)
      console.log(authCtx)
      authCtx.login(res.data)
    })
    .catch(err => console.log(err))
  }


  return (
    <div className='login-form'>
      <h1>Welcome to our site! {register ? 'Register' : 'Login'} below!</h1>
      {register ? (
        <div>

        <form onSubmit={e => handleAuth(e)}>
          <input placeholder='username' onChange={e => setUsername(e.target.value)} value={username}/>
          <input  type='password' placeholder='password' onChange={e => setPassword(e.target.value)} value={password} /> 
          <button>Submit</button>    
        </form>
        </div>
      ) : (
        <div>

        <form onSubmit={e => handleAuth(e)}>
          <input placeholder='username' onChange={e => setUsername(e.target.value)} value={username}/>
          <input type='password' placeholder='password' onChange={e => setPassword(e.target.value)} value={password} /> 
          <button>Submit</button>    
        </form>
        </div>

      )}
      <button onClick={() => setRegister(!register)}>{register ? "Login": "Register"}</button>
    </div>
  )
}

export default Auth