import React, {useEffect, useState} from "react"
import styled from "styled-components" 
import head from "../images/newheader.avif"
import logo from "../images/smllogo.png"

const Container = styled.div``;

const Title = styled.div`
`;

const H2 = styled.div`
`;

const H3 = styled.div`
`;

const Head = styled.div`
display: flex-row;
width: 100%;
height: 180vh;
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
        {/* <Title>Pottree</Title>
        <H2>Home of unique, beautiful, handcrafted pottery</H2> */}
      </Head>
      <Spacer>
        <Logo />
      </Spacer>

    </Container>
  )
}
export default Home