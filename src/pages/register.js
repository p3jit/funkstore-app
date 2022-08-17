import React from 'react'
import "./register.css"

function Register() {
  return (
  <>
    <div className='register-container d-flex justify-content-center align-items-center'>
      <div className='form-container'>
        <h2 className='display-3 text-muted'>CREATE ACCOUNT</h2>
        <form className='form-register' name='resgister-from'>
          <div className='row d-flex justify-content-center py-3 px-3'>
            <div className="col">
              <input placeholder='FIRSTNAME' name='fname' required></input>
            </div>
            <div className="col">
              <input placeholder='LASTNAME' name='lname' required></input>
            </div>
          </div> 
          <div className='row d-flex justify-content-center py-2 px-3'>
            <div className="col">
              <input placeholder='USERNAME' name='username' required></input>
            </div>
            <div className="col">
              <input placeholder='EMAIL' name='email' required ></input>
            </div>
          </div> 
          <div className='row d-flex justify-content-center py-3 px-3'>
            <div className="col">
              <input placeholder='PASSWORD' name='password' required></input>
            </div>
            <div className="col">
              <input placeholder='CONFIRM PASSWORD' name='repassword' required></input>
            </div>
          </div>
          <h4 className='acknowledge fs-6 pt-2 px-1'>By continuing, you agree to FunkStore's Terms of Use and Privacy Policy ✅ </h4>
          <div className="button-container d-flex pt-4 justify-content-between">
            <button type="cancel" className="btn btn-outline-danger btn-lg">CANCEL</button>
            <button type="submit" className="btn btn-outline-success btn-lg">REGISTER</button>
          </div> 
        </form>
      </div>
    </div>
  </>
  )
}

export default Register