import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
border: 1px solid black;
width: 50vw;
display: flex;
height: 200px;
margin: 10px;`
const ImageCont = styled.div`
height: 100%;`
const Image = styled.img`
height: 100%;`
const RightCont = styled.div`
display: flex;
justify-content: space-between;
width: 100%;`
const InfoCont = styled.div``
const Name = styled.div`
padding: 10px;`
const Price = styled.span`
margin: 10px;`
const Button = styled.button`
height: 50px;`



function BasketItem({item, index}) {
  return (
    <Container>
      <ImageCont>
          <Image src={item.img}></Image>
      </ImageCont>
      <RightCont>
          <InfoCont>
              <Name>{item.title}</Name>
              <Price>£ {item.price}</Price>
          </InfoCont>
          <Button>REMOVE FROM BASKET</Button>
      </RightCont>
    </Container>
  )
}

export default BasketItem
