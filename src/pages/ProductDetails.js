import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const PageContainer = styled.div`   
`;
const Div = styled.div`
    height: 80vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const DetailsContainer = styled.div`
    display: flex;
    height: 80vh;
    width: 80vw;
    min-height: 300px;
    min-width: 350px;
    box-shadow: 0px 10px 40px 5px rgba(0,0,0,0.1);
`;

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

const ProductName = styled.div`
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

const ButtonBasket = styled.button`
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

const ButtonFavorites = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 30%;
    border: 1px solid black;
    background-color: white;
    &:hover {
    background: #BF8262
}
`;


function ProductDetails() {
    return (
        <PageContainer>
            <Navbar />

            <Div>
            <DetailsContainer>
                <ProductImg src={"https://media.istockphoto.com/photos/a-bowl-on-the-wood-background-picture-id1183932238?b=1&k=20&m=1183932238&s=170667a&w=0&h=3mQMMpYPkok7HeCYJjXiyFfxdZrSKE1f9LAU2rA0eIw="}/>
                <ProductInfo>
                    <ProductName><h1>Product Name</h1></ProductName>
                    <Description><b>Description:</b> fehid hfhgb vdfgd sgdgg dgdr gdggfgfgfht htthth tgurvg urb</Description>
                    <Tags>Tags: vase, handmade</Tags>
                    <Price>£54</Price>
                    <ButtonDiv>
                        <ButtonBasket>ADD TO BASKET</ButtonBasket>
                        <ButtonFavorites>ADD TO FAVORITES</ButtonFavorites>
                    </ButtonDiv>
                </ProductInfo>
            </DetailsContainer>
            </Div>
        </PageContainer>
    )
}

export default ProductDetails
