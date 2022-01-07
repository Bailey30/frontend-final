import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom"

const NavComponent = styled.div`
  
    display: flex;
    margin: 0;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 7vh;
    background-color: white;
;
`;

const Buttons = styled.div`
    display: flex;
    height: 100%;
    width: 25vw;
    justify-content: space-evenly;
    
`;

const NavButton = styled.button`
    border: none;
    margin: 0;
    height: 7vh;
    color: black;
    background-color: white;
    &:hover{
        border-bottom: 1px solid black;
    }
`;

const Title = styled.h3`
    color: black;
    padding-left: 30px;
`;

function Navbar() {
    return (
        <NavComponent>
            <Link to='/' style={{'textDecoration': 'none'}}>
            <Title>POTTREE</Title>
            </Link>
            <Buttons>
            <Link to='/'>
                <NavButton>Home</NavButton>
            </Link>
            <Link to='/about' style={{'min-width': 'fit-content'}}>
                <NavButton>About us</NavButton>
            </Link>
            <Link to='/basket'>
                <NavButton>Basket</NavButton>
            </Link>
            <Link to='/login'>
                <NavButton>Login</NavButton>
            </Link>
            </Buttons>
        </NavComponent>
    )
}

export default Navbar
