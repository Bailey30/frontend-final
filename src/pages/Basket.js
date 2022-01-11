import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar';

const Container = styled.div`
`

function Basket({user, setUser}) {
    return (
        <Container>
            <Navbar user={user} setUser={setUser}/>

           
        </Container>
    )
}

export default Basket