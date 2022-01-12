import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { removeFromFavoritesFetch, AddToBasketFetch } from '../requestMethods';

const Container = styled.div`
    font-family: 'Open Sans', sans-serif;
    display: flex;
    width: 50vw;
    max-width: 50vw;
    height: 10vw;
    box-shadow: 0px 10px 40px 5px rgba(0,0,0,0.1);
`;

const Img = styled.img`
    object-fit: cover;
    width: 20%;
    height: 100%;
`;

const Info = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
`;

const ProductName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 60%;  
`;

const Title = styled.h3`

`;

const NameContent = styled.h3`
    font-weight: 500;
`;

const PriceContent = styled.h3``

const UnitPrice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
     height: 100%;
    width: 40%;
  
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: white;
    border: none;
`;

const ButtonAdd = styled.button`
    height:25%;
    width: 90%;
    background-color: black;
    color: white;
    border: none;
`;

const ButtonRemove= styled.button`
    height:25%;
    width: 90%;
    border: 1px solid black;

`;

function favoriteItem({user, item, index, favorite, setFavorite, prices, setPrices}) {

    const addHandler = () => {
        AddToBasketFetch(user, item)
        const storedPrices = [...prices];
        storedPrices.push(item.price);
        setPrices(storedPrices);
    }

    const removeHandler = () => {
        removeFromFavoritesFetch(item, user);
        const storedFavorites = [...favorite];
        storedFavorites.splice(index, 1);
        setFavorite(storedFavorites);
    }

    return (
       <Container>
            <Img src={`https://res.cloudinary.com/dthuzb3gx/image/upload/${item.img}.jpg`}/>
            <Info>
                <ProductName>
                    <NameContent>{item.title}</NameContent>
                </ProductName>
                <UnitPrice>
                    <PriceContent>{`£${item.price}`}</PriceContent>
                </UnitPrice>
            </Info>
            <ButtonContainer>
            <ButtonAdd onClick={addHandler}>Add To Basket</ButtonAdd>
            <ButtonRemove onClick={removeHandler}>Remove From Favorites</ButtonRemove>
            </ButtonContainer>
       </Container>
    )
}

export default favoriteItem
