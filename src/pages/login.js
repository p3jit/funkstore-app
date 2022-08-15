import React from 'react'
import "./login.css"

function Login() {
  return (
    <>
    <div className='register-container d-flex justify-content-center align-items-center'>
      <div className='form-container'>
        <h2 className='display-3 text-muted'>SIGN IN</h2>
        <form className='form-register' name='login-from'>
          <div className='d-flex flex-column'>
            <input name='user' placeholder='USERNAME' class="input-from-item my-3"></input>
            <input name='password' placeholder='PASSWORD' class="input-from-item my-3"></input>
          </div>
          <a className='acknowledge fs-6 pt-2 px-1' href="#a">CREATE NEW ACCOUNT</a>
          <div className="button-container d-flex pt-4 justify-content-between">
            <button type="cancel" class="btn btn-outline-danger btn">CANCEL</button>
            <button type="submit" class="btn btn-outline-success btn">LOGIN</button>
          </div> 
        </form>
      </div>
    </div>
  </>
  )
}

export default Login