import React, { useEffect, useState } from "react"
import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

const Container = styled.div`
min-width: 25%;
display: flex;
flex-direction:column;
margin: 20px 20px;
position: relative;
z-index: 0;


`
const LinkCont = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 19%;
right: 0;
opacity: 0;
background-color:black;
z-index: 100;`



// const Image = styled.img`
// max-width: 440px;
// height: 100%;
// object-fit: cover;
// /* margin-bottom: 10px; */
// z-index: -100;
// position: relative;
// &:hover {transform: translateY(30px)};
// /* ${LinkCont}{    opacity: 1;} */
// ;
// `
const Image = styled.img`
height: 100%;
object-fit: cover;
`

const ImageCont = styled.div`
max-width: 440px;
height:360px;
display: flex;
justify-content: center;
overflow: hidden;

`

const BottomCont = styled.div`
display: flex;
flex-direction: column;
border-bottom: 1px solid black;
`

const Title = styled.span`
padding: 10px 5px;
margin-bottom: 7px;

`


const Price = styled.span`
padding: 10px 5px;
font-weight: bold;
`
const BottomLine = styled.div`
display: flex;
align-items: center;
justify-content: space-between;`


function Product({ item }) {
    const { categories, desc, img, title, userId, price } = item
    return (
        <Container>
            {/* <Image src={img}></Image> 
            <LinkCont>fdgdfg</LinkCont> */}
            <ImageCont>
                <Image src={img}></Image>
            </ImageCont>

            <BottomCont>
                <Title>{title}</Title>
                <BottomLine><Price>£{price}</Price><AddIcon /></BottomLine>
            </BottomCont>
        </Container>
    )
}

export default Product