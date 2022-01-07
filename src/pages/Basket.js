import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar';

const Container = styled.div`
`

const Button = styled.button`
color: ${props => props.color}`







function Basket() {
    return (
        <Container>
            <Navbar />
        </Container>
    )
}

export default Basket