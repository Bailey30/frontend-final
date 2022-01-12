import React, {useEffect, useState} from "react"
import styled from "styled-components" 
import head from "../images/newheader.avif"
import logo from "../images/lglogo.png"
import cup from "../images/cups.jpg"
import plate from "../images/plates.jpg"
import bowl from "../images/bowls.jpg"
import vase from "../images/vases.jpg"
import {Link } from "react-router-dom"


const Container = styled.div`
width: 100vw;
`;

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
  margin-left: 20vh;
  margin-top: 100px;
  text-decoration: none;
  user-select: none;
`;

const Button2 = styled(Button1)`
  background-color: white;
  margin-left: 10px;
  color: black;
`;

const H3 = styled.a`
font-family: Lato;
font-size: 20px;
text-decoration: none;
margin-bottom: 70px;
margin-left:30px;
`;

const Head = styled.div`
display: flex-row;
width: 100vw;
height: 100vh;
position: relative;
bottom: 30px;

background-image: url(${head});
`;

const Logo = styled.div`
background-image: url(${logo});
width: 70px;
height: 70px;
padding: 20px;
margin-left:25vw;
`;

const Spacer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 100vw;
height: 20vh;
`;

const Text = styled.div`
font-family: Lato;
font-size: 20px;
color: #272c33;
`;

const Catagories = styled.div`
display:flex;
flex-direction: flex-row;
justify-content: space-around;
`;

const Boxes = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-end;
background-color: #b8a982;
margin-top: 40vh;
width: 35vh;
height: 20vh;
margin-left: 5vh;
margin-bottom: 20px;
`;

const Bowls = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
margin:10px;
background-image: url(${bowl});
width: 300px;
height: 400px;
`;

const Plates = styled(Bowls)`
background-image: url(${plate});
`;

const Cups = styled(Bowls)`
background-image: url(${cup});
`;

const Vases = styled(Bowls)`
background-image: url(${vase});
`;

const Footer = styled.div`
width: 100%;
height: 30vh;
background-color: #16191f;

`;


function Home({user, setUser}) {
  return(
    <Container>
      <Head>
        <Title>Pottree</Title>
        <Link to ="About">button</Link>
        <H2>Home of unique, beautiful, handcrafted pottery</H2>
        <Button1 href="">Browse All</Button1>
        <Button2 as="a" href="Basket.js">About Us</Button2>
      </Head>
      <Spacer>
        <Logo />
        <Text>Browse by catagory or follow the links above</Text>
      </Spacer>
      <Catagories>
        <Plates>
        <Boxes>
        <H3>PLATES</H3>
        </Boxes>
        </Plates>
        <Cups>
          <Boxes>
            <H3>CUPS</H3>
          </Boxes>
        </Cups>
        <Bowls>
        <Boxes>
          <H3>BOWLS</H3>
        </Boxes>
        </Bowls>
        <Vases>
        <Boxes>
          <H3>VASES</H3>  
        </Boxes>
        </Vases>
      </Catagories>
      <Footer />
  </Container>
  )
}
export default Home