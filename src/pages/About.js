import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar';

const Container = styled.div`
`
function About() {
    return (
        <Container>
            <Navbar />
            <p>FINAL PROJECT from 4 cool dudes or something...</p>
        </Container>
    )
}

export default About