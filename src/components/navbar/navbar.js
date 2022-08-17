import {React , useContext} from 'react'
import "./navbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled } from '@mui/material/styles';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../context/authContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 2,
      top: 8,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

function Navbar() {
  
  const {user} = useContext(AuthProvider);
  
  return (
    <>
        <div className='navbar-container'>
            <div className='logo-container'>
                <Link to="/" className='logo'>FunkStore.</Link>
            </div>
            <div className='search-container'>
                <input className='search-bar'/>
                <button className='search-btn'><SearchOutlinedIcon/></button>
            </div>
            <div className='cart-account-container'>
              { user.username ? <div className='account-link'>Hi ,{user.username}</div> : <Link to="/login" className='account-link'>REGISTER/SIGN IN</Link>}
                <div className='cart-container'>
                    <StyledBadge badgeContent={1} color="warning">
                        <button className='cart-btn'><ShoppingBagOutlinedIcon/></button>
                    </StyledBadge>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Navbar