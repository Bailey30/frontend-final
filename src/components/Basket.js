//fetch user basket
//map basket contents
//remove item button needs to remove from basket and what is being rendered on the page
//send userId to find basket
//send userId and productId to delete from basket

import React, { useEffect, useState } from "react"
import styled from "styled-components"
import BasketItem from "../components/BasketItem"
const _ = require('lodash');
const { GetBasketFetch } = require("../requestMethods")

const Container = styled.div`
width: 100%;`

const Wrapper = styled.div`
margin-top: 100px;;
display: flex;
justify-content: space-evenly;`
const LeftCont = styled.div`
width: 50vw;`
const RightCont = styled.div`
display: flex;
justify-content: center;
width: 30vw;`
const Totals = styled.div`
border: 1px solid black;
margin-top: 10px;
width: 300px;
height: 400px;`

const Subtotal = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
`

const Shipping = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
`

const Total = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
`

const Text = styled.span`
width: fit-content;
margin: 0 10px;
`

const Amount = styled.span`
width: fit-content;
margin: 0 10px;
`

function Basket({ user, prices, setPrices }) {
  const [basket, setBasket] = useState([])
  const [subTotal, setSubTotal] = useState()

  useEffect(() => {
    GetBasketFetch(user, setBasket)
    console.log(user)
    console.log(basket)
    console.log(prices)
  }, [user])

  let total = subTotal + (prices.length * 2.5)
    let shipping = prices.length * 2.5

  useEffect(() => {
    setSubTotal(_.sum(prices))
    
  }, [])

 

  return (
    <Container>


      <Wrapper>
        <LeftCont>
          {basket ? basket.map((item, index) => {
            //  return console.log(test);
            return <BasketItem item={item} index={index} setBasket={setBasket} basket={basket} user={user}/>
          }) :
            null}
        </LeftCont>
        <RightCont>
          <Totals>
            <Subtotal><Text>Subtotal</Text><Amount>£ {subTotal}</Amount></Subtotal>
            <Shipping><Text>Shipping</Text><Amount>£ {shipping}</Amount></Shipping>
            <Total><Text>TOTAL</Text><Amount>£ {total}</Amount></Total>
          </Totals>
        </RightCont>
      </Wrapper>

    </Container>
  )
}

export default Basket