import React, {useEffect, useState} from "react"
import styled from "styled-components" 
import head from "../images/newhead.jpg"
import logo from "../images/smllogo.png"

const Container = styled.div``;

const Title = styled.div`
font-family: Lato;
font-size: 110px;
margin-left: 20vh;
padding-top: 20vh;
color: black;
`;

const H2 = styled.div`
font-family: Lato;
font-size: 25px;
margin-left: 40vh;
margin-top:5vh;
color: #272c33;
`;

const Button1 = styled.button`
background-color: black;
  border: 1px solid black;
  box-sizing: border-box;
  color: white;
  font-family: "Lato",sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 16px 50px;
  // position: relative;
  margin-left: 20vh;
  margin-top: 100px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

const Button2 = styled.button`
  background-color: transparent;
  border: 1px solid #266DB6;
  box-sizing: border-box;
  color: #00132C;
  font-family: "Avenir Next LT W01 Bold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 16px 40px;
  margin-left: 10px;
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


.button-51:hover,
.button-51:active {
  outline: 0;
}

.button-51:hover {
  background-color: transparent;
  cursor: pointer;
}

.button-51:before {
  background-color: #D5EDF6;
  content: "";
  height: calc(100% + 3px);
  position: absolute;
  right: -7px;
  top: -9px;
  transition: background-color 300ms ease-in;
  width: 100%;
  z-index: -1;
`;


const H3 = styled.div`
`;

const Head = styled.div`
display: flex-row;
width: 100%;
height: 100vh;
background-image: url(${head});
background-color: red;
`;

const Logo = styled.div`
background-image: url(${logo});
`;
const Spacer = styled.div`
`;
const Catagories = styled.div`
`;
const Bowls = styled.div`
`;
const Plates = styled.div`
`;
const Cups = styled.div`
`;
const Vases = styled.div`
`;


function Home() {
  return(
    <Container>
      <Head>
        <Title>Pottree</Title>
        <H2>Home of unique, beautiful, handcrafted pottery</H2>
        <Button1>Purchase</Button1>
        <Button2>Learn More</Button2>
      </Head>
      <Spacer>
        <Logo />
      </Spacer>

    </Container>
  )
}
export default Home