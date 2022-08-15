import React from 'react'
import "./navbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled } from '@mui/material/styles';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 2,
      top: 8,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

function Navbar() {
  return (
    <>
        <div className='navbar-container'>
            <div className='logo-container'>
                <a href="/" className='logo'>FunkStore.</a>
            </div>
            <div className='search-container'>
                <input className='search-bar'/>
                <button className='search-btn'><SearchOutlinedIcon/></button>
            </div>
            <div className='cart-account-container'>
                <div className='account-link'>REGISTER/SIGN IN</div>
                <div className='cart-container'>
                    <div className='cart-txt'>CART</div>
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