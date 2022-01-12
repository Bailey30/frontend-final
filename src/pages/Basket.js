import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar';

const Container = styled.div`
`
const Button = styled.button`
color: ${props => props.color}`

const ProductImg = styled.img`
    height: 100%;
    width: 50%;
    background-color: grey;
    
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5%;
`;

const ProductName = styled.h1`
    margin-left: 10%;
    width: 100%;
    
`;

const Description = styled.p`
    margin-left: 10%;
    height: 30%;
    width: 80%;
`;

const Tags = styled.p`
    margin-left: 10%;
`;

const Price = styled.p`
    margin-left: 10%;
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    justify-content: space-around;
    width: 100%;
    height: 20%;
    margin-top: 10%;
`;

const ButtonRemoveBasket = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 30%;
    background-color: black;
    color: white;
    border: none;
    &:hover {
    background: #BF8262
}
`;

const PageContainer = styled.div`
`

function Basket() {
    return (
        <Container>            
            <PageContainer>
            <ProductImg src={"https://media.istockphoto.com/photos/a-bowl-on-the-wood-background-picture-id1183932238?b=1&k=20&m=1183932238&s=170667a&w=0&h=3mQMMpYPkok7HeCYJjXiyFfxdZrSKE1f9LAU2rA0eIw="}/>
                <ProductInfo>
                    <ProductName>Cracked Pottery</ProductName>
                    <Description><b>Description:</b> gobbdegook</Description>
                    <Tags>Tags: vase, handmade</Tags>
                    <Price>£100,000,000</Price>
                    <ButtonDiv>
                        <ButtonRemoveBasket>REMOVE FROM BASKET</ButtonRemoveBasket>                    
                    </ButtonDiv>
                </ProductInfo>
            </PageContainer>
        </Container>
    )
}

export default Basket