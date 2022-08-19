import {React , useRef , useState} from 'react'
import "./register.css"
import {useNavigate} from 'react-router-dom'

function Register() {

  //Refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const cPasswordRef = useRef();

  //History
  const navigate = useNavigate();

  //Error state
  const [error , setError] = useState(null);

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");

  }

  const handleRegister = (e) => {
    e.preventDefault();
    if(!userNameRef.current.value || !lastNameRef.current.value || !emailRef.current.value || !userNameRef.current.value || !passwordRef.current.value || !cPasswordRef.current.value) {
      setError("FROM NOT FILLED!");
      return;
    }
    else {

      if(passwordRef.current.value !== cPasswordRef.current.value) {
        setError("PASSWORD NOT MATCHING!");
        return;
      }
      const bodyObj = JSON.stringify({
        username: userNameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
        firstname: firstNameRef.current.value,
        lastname: lastNameRef.current.value,
        isAdmin: false
      });

      const fetchRegister = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}auth/register` , {
          method : "POST",
          headers : {
            'Content-Type' : 'application/json'
          },
          body : bodyObj
        });
        if(res.status !== 201) {
          setError("SERVER ERROR");
          return;
        }
        const data = await res.json();
      }
      fetchRegister();
      setTimeout(()=>{
        navigate("/login");
      },100);
    }
  }
  return (
  <>
    <div className='register-container d-flex justify-content-center align-items-center'>
      <div className='form-container'>
        <h2 className='display-3 text-muted'>CREATE ACCOUNT</h2>
        { error ? <div className="alert alert-danger" role="alert">{error}</div> : ""}
        <form className='form-register' name='resgister-from'>
          <div className='row d-flex justify-content-center py-3 px-3'>
            <div className="col">
              <input  ref={firstNameRef} placeholder='FIRSTNAME' name='fname' required></input>
            </div>
            <div className="col">
              <input ref={lastNameRef} placeholder='LASTNAME' name='lname' required></input>
            </div>
          </div> 
          <div className='row d-flex justify-content-center py-2 px-3'>
            <div className="col">
              <input ref={userNameRef} placeholder='USERNAME' name='username' required></input>
            </div>
            <div className="col">
              <input ref={emailRef} placeholder='EMAIL' name='email' required ></input>
            </div>
          </div> 
          <div className='row d-flex justify-content-center py-3 px-3'>
            <div className="col">
              <input ref={passwordRef} type={'password'} placeholder='PASSWORD' name='password' required></input>
            </div>
            <div className="col">
              <input ref={cPasswordRef} type={'password'} placeholder='CONFIRM PASSWORD' name='repassword' required></input>
            </div>
          </div>
          <h4 className='acknowledge fs-6 pt-2 px-1'>By continuing, you agree to FunkStore's Terms of Use and Privacy Policy ✅ </h4>
          <div className="button-container d-flex pt-4 justify-content-between">
            <button type="cancel" className="btn btn-outline-danger btn-lg" onClick={handleCancel}>CANCEL</button>
            <button type="submit" className="btn btn-outline-success btn-lg" onClick={handleRegister}>REGISTER</button>
          </div> 
        </form>
      </div>
    </div>
  </>
  )
}

export default Register