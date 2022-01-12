import React, { useEffect, useState } from "react"
import styled from "styled-components"
import head from "../images/newheader.avif"
import logo from "../images/lglogo.png"
import cup from "../images/cups.jpg"
import plate from "../images/plates.jpg"
import bowl from "../images/bowls.jpg"
import vase from "../images/vases.jpg"
import { Link } from "react-router-dom"


const Container = styled.div`
width: 100vw;
max-width: 100%;
padding: 0;
margin: 0;
overflow: hidden;
`
const Title = styled.div`
font-family: Lato;
font-size: 110px;
margin-left: 20vh;
/* padding-top: 20vh; */
color: black;
width: 50%;
position: absolute;
top: 20%;
`;

const H2 = styled.div`
position: absolute;
top: 35%;
left: 10%;
font-family: Lato;
font-size: 25px;
/* margin-left: 40vh;
margin-top:20px;
margin-bottom: 10px; */
color: #272c33;
width: 50%;
`;

const ButtonCont = styled.div`
position: absolute;
width: 23%;
display: flex;
justify-content: space-between;
height: auto;
left: 38%;
top: 48%;
margin: 40px;`

const Button1 = styled.button`
background-color: black;
  border: 1px solid black;
  box-sizing: border-box;
  color: white;
  font-family: "Lato",sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  /* padding: 5px 50px; */
  width: 200px;
  height: 50px;
  /* margin-left: 20vh;
  margin-top: 100px; */
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
/* margin-bottom: 70px;
margin-left:30px; */
width: fit-content;
`;

const Head = styled.div`
overflow: hidden;
/* display: flex-row; */
margin: 0;
padding: 0;
width: 100vw;
max-width: 100%;
height: 100vh;
position: relative;
bottom: 30px;

background-image: url(${head});
background-repeat: no-repeat;
background-size: 100% ;
`;

const Logo = styled.div`
background-image: url(${logo});
width: 70px;
height: 70px;
padding: 20px;
margin: 0 auto;
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
width: 50%;
margin: 0px auto;
text-align: center;
`;

const Catagories = styled.div`
display:flex;
flex-direction: flex-row;
justify-content: space-around;
`;

const Boxes = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #b8a982;
/* margin-top: 40vh;
width: 35vh;
height: 20vh;
margin-left: 5vh;
margin-bottom: 20px; */
height: 15%;
width: 75%;
/* margin: 0 auto; */
position: absolute;
bottom: 20px;

`;

const Bowls = styled.div`
display: flex;
flex-direction: column;
margin:10px;
background-image: url(${bowl});
width: 300px;
height: 400px;
position: relative;
align-items: center;
`;

const Plates = styled(Bowls)`
background-image: url(${plate});
position: relative;
display: flex;
align-items: center;
`;

const Cups = styled(Bowls)`
background-image: url(${cup});
position: relative;
display: flex;
align-items: center;
`;

const Vases = styled(Bowls)`
background-image: url(${vase});
position: relative;
display: flex;
align-items: center;
`;

const Footer = styled.div`
width: 100%;
height: 30vh;
background-color: #16191f;

`;


function Home() {
  return (
    <Container>
      <Head>
        <Title>POTTREE</Title>

        <H2>Buy and sell unique, beautiful, handcrafted pottery</H2>

<ButtonCont>
   <Link to="/productpage"><Button1 href="">Browse All</Button1></Link>
        <Link to="/uploadproduct"><Button2>SELL</Button2></Link>
</ButtonCont>
       
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