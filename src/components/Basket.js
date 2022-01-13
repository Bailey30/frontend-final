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
width: 100%;
font-family: 'Open Sans', sans-serif;
`

const Heading = styled.h1`
width: fit-content;
margin-left: 95px;
font-weight: 100;`

const Wrapper = styled.div`
margin-top: 10px;;
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
height: 400px;
position: relative;`

const Subtotal = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 10px;
padding-bottom: 10px;
border-bottom: 1px solid gray;
`

const Shipping = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 10px;
padding-bottom: 10px;
border-bottom: 1px solid gray;
`

const Total = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
padding: 40px 0;
font-size: 30px;;
`

const Text = styled.span`
width: fit-content;
margin: 0 10px;
font-weight: 200;
`

const Amount = styled.span`
width: fit-content;
margin: 0 10px;
font-weight: 600;
`
const Button = styled.button`
position: absolute;
bottom: 5%;
left: 5%;
right: 5%;
height: 50px;
width: 270px;
background: none;
border: 1px solid black;
background-color: black;
color: white;
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
    
  }, [prices])

 

  return (
    <Container>

    <Heading>YOUR BASKET</Heading>
      <Wrapper>
        <LeftCont>
          {basket ? basket.map((item, index) => {
            //  return console.log(test);
            return <BasketItem item={item} index={index} setBasket={setBasket} basket={basket} user={user} prices={prices} setPrices={setPrices}/>
          }) :
            null}
        </LeftCont>
        <RightCont>
          <Totals>
            <Subtotal><Text>Subtotal</Text><Amount>£ {subTotal}</Amount></Subtotal>
            <Shipping><Text>Shipping</Text><Amount>£ {shipping}</Amount></Shipping>
            <Total><Text>TOTAL</Text><Amount>£ {total}</Amount></Total>
          <Button>CONTINUE TO CHECKOUT</Button>
          </Totals>
        </RightCont>
      </Wrapper>

    </Container>
  )
}

export default Basket