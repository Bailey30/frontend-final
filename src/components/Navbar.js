import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom"

const NavComponent = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 0;
    left: 0;
    width: 100vw;
    height: 7vh;
    background-color: grey;
`;

const NavButton = styled.button`
    background-color: lightblue;
    border: none;
    border-left: 2px solid grey;
    margin: 0;
    height: 100%;
`;

const Title = styled.h3`
    color: white;
`;

function Navbar() {
    return (
        <NavComponent>
            <Title>POTTREE</Title>
            <Link to='/'>
                <NavButton>Home</NavButton>
            </Link>
            <Link to='/about'>
                <NavButton>About us</NavButton>
            </Link>
            <Link to='/basket'>
                <NavButton>Basket</NavButton>
            </Link>
            <Link to='/login'>
                <NavButton>Login</NavButton>
            </Link>
        </NavComponent>
    )
}

export default Navbar
