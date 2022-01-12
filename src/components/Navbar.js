import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

const NavComponent = styled.div`
  
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    /* top: 0;
    left: 0;
    right: 0; */
    max-width: 93vw;
    height: 8vh;
    background-color: white;
    z-index: 100;
;
`;

const Buttons = styled.div`
    display: flex;
    height: 100%;
    width: 25vw;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    
`;

const NavButton = styled.button`
    border: none;
    margin: 0;
    height: 60%;
    color: black;
    background-color: white;
    &:hover{
        border-bottom: 1px solid black;
    }
    font-size: 12px;
    /* position: relative; */
`;

const Title = styled.h3`
    color: black;
    padding-left: 30px;
    letter-spacing: 1px;
    font-size: 24px;
`;



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 7,
    // border: `2px solid ${theme.palette.background.paper}`,
    background: "blue",
    padding: '0 4px',
  },
}));

function Navbar({ user, setUser }) {

    const logOut = () => {
        localStorage.removeItem("myToken")
        setUser("")
        console.log(user);
        // setLoggedIn(false)
    }

    return (
        <NavComponent>
            <Link to='/' style={{ 'textDecoration': 'none' }}>
                <Title>POTTREE</Title>
            </Link>
            <Buttons>

                <Link to='/productpage'>
                    <NavButton>SHOP</NavButton>
                </Link>
                <Link to='/uploadproduct'>
                    <NavButton>SELL</NavButton>
                </Link>
                <Link to='/about' style={{ 'min-width': 'fit-content' }}>
                    <NavButton>ABOUT US</NavButton>
                </Link>
                <Link to='/basket'>
                    <NavButton>
                        BASKET
                    </NavButton>

                </Link>
                {!user ? <Link to="/login"><NavButton>LOGIN</NavButton></Link> : <Link to=""><NavButton
                    onClick={() => logOut()}
                >LOG OUT</NavButton></Link>}


            </Buttons>
        </NavComponent>
    )
}

export default Navbar
