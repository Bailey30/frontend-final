import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import FavoriteFeed from '../components/FavoriteFeed';

const Container = styled.div`
  
`;

function FavoritesPage({user, prices, setPrices}) {
    return (
        <Container>
            <Navbar />
            <FavoriteFeed user={user} prices={prices} setPrices={setPrices} />
        </Container>
    )
}

export default FavoritesPage
