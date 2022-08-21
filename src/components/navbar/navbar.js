import {React , useContext, useEffect, useState, useRef} from 'react'
import "./navbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled } from '@mui/material/styles';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/authContext';
import { CartProvider } from '../../context/cartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 2,
      top: 8,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

function Navbar() {
  
  const {user, setUser} = useContext(AuthProvider);
  const {cart, setCart} = useContext(CartProvider);

  const [searchFiltered,setSearchFiltered] = useState([]);
  const [searchText,setSearchText] = useState("");
  const searchRef = useRef();
  const searchSelectContainerRef = useRef();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  }
  
  const handleLinkClick = (e) => {
    searchRef.current.value="";
    searchSelectContainerRef.current.style.opacity = '0';
  }

  const handleLogOut = () => {
    window.localStorage.removeItem("userObj");
    setUser({});
    setCart(null);

  }

  useEffect(()=>{
    const fetchSearch = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}search/${searchText}`);
      const data = await res.json();
      setSearchFiltered(data);
      searchSelectContainerRef.current.style.opacity = '100';
    }
    fetchSearch();
  },[searchText])
  
  return (
    <>
        <div className='navbar-container'>
            <div className='logo-container'>
                <Link to="/" className='logo fs-3'>FunkStore.</Link>
            </div>
            <div className='search-outer-container'>
              <div className='search-container'>
                  <input className='search-bar' onChange={handleSearch} ref={searchRef}/>
                  <button className='search-btn'><SearchOutlinedIcon/></button>
              </div>
              <section className='d-flex flex-column search-select-container px-2' ref={searchSelectContainerRef}>
                {
                  searchFiltered.length ? searchFiltered.map((item)=>(
                    <Link to={`/products/${item.id}`} key={item.id} className='select-link py-1' onClick={handleLinkClick}>{item.title}</Link>
                  )) : ""
                }  
              </section>
            </div>
            <div className='cart-account-container'>
              { user.username ? 
                <div className="dropdown account-link">
                  <button className="btn btn-secondary-outline dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    HI, {user.username.toUpperCase()}
                  </button>
                  <ul className="dropdown-menu">
                    <Link  className="dropdown-item" to="/orders">ORDERS</Link>
                    <li className="dropdown-item"><div onClick={handleLogOut}>SIGN OUT</div></li>
                  </ul>
                </div> 
              : 
                <Link to="/login" className='account-link'>REGISTER/SIGN IN</Link>
              }
                <div className='cart-container'>
                    <StyledBadge badgeContent={ cart && cart.products && cart.products.length ? cart.products.length : 0} color="warning" onClick={()=>{navigate("/cart")}}>
                        <button className='cart-btn'><ShoppingBagOutlinedIcon/></button>
                    </StyledBadge>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Navbar