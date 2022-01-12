import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import FavoriteItem from './FavoriteItem';
import { getFavoritesFetch } from "../requestMethods";

const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    padding-top: 1vh;
    
`;

function FavoriteFeed({user, prices, setPrices}) {
    const [favorite, setFavorite] = useState([]);

    useEffect(()=> {
        getFavoritesFetch(user, setFavorite)
    }, [user]);
    
    return (
       <FeedContainer>
          {favorite ? favorite.map((item, index) => {
              return <FavoriteItem prices={prices} setPrices={setPrices} user={user} favorite={favorite} setFavorite={setFavorite} item={item} index={index}/>
          }): null}
       </FeedContainer>
    )
}

export default FavoriteFeed
