import {React , useRef , useContext, useState, useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import  { AuthProvider } from '../context/authContext';
import { CartProvider } from '../context/cartContext';
import "./login.css"


function Login() {

  //Refs
  const userRef = useRef();
  const passRef = useRef();
  
  //History
  const navigate = useNavigate();

  //Context
  const {user,setUser} = useContext(AuthProvider);
  const {cart,setCart} = useContext(CartProvider);

  //State
  const [error , setError] = useState(false);

  //Handle Cancel
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  }

  //Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    const userName = userRef.current.value;
    const passWord = passRef.current.value;

    if(!userName && !passWord) {
      setError(true);
      return;
    }

    //Login function
    const fetchUser = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}auth/login` , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:userName,password:passWord})
      });
      if(res.status !== 201) {
        setError(true);
        return;
      }
      const data = await res.json();
      window.localStorage.setItem("userObj" , JSON.stringify({userId:data._id,username:data.username , accessToken: data.accessToken}));
      setUser(data);
      setTimeout(()=>{
        navigate("/");
        window.location.reload();
      },2000);
    }
    fetchUser(); 
  }

  // Redirect user if already logged in
  useEffect(()=>{
    if(user.username) {
      navigate(-1);
    }
  },[]);

  return (
    <>
    <div className='register-container d-flex justify-content-center align-items-center'>
      <div className='form-container'>
        <h2 className='display-3 text-muted d-flex justify-content-center'>SIGN IN</h2>
        { error ? <div className="alert alert-danger" role="alert">ACCOUNT NOT FOUND</div> : ""}
        <form className='form-register' name='login-from'>
          <div className='d-flex flex-column'>
            <input name='user' ref={userRef} placeholder='USERNAME' className="input-from-item my-3"></input>
            <input name='password' ref={passRef} placeholder='PASSWORD' type={'password'} className="input-from-item my-3"></input>
          </div>
          <Link to="/register" className='acknowledge fs-6 pt-2 px-1' href="#a">CREATE NEW ACCOUNT</Link>
          <div className="button-container d-flex pt-4 justify-content-between">
            <button type="cancel" className="btn btn-outline-danger btn" onClick={handleCancel}>CANCEL</button>
            <button type="submit" className="btn btn-outline-success btn" onClick={handleLogin}>LOGIN</button>
          </div> 
        </form>
      </div>
    </div>
  </>
  )
}

export default Login