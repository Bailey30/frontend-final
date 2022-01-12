import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import ProductFeed from "../components/ProductFeed"

const Container = styled.div``

function ProductPage({user, setUser, prices, setPrices}) {
  console.log(user)
  return (
    <Container>
      <Navbar style={{"z-index": 100}} user={user} setUser={setUser}/>
      <ProductFeed user={user} prices={prices} setPrices={setPrices}/>
    </Container>
  )
}

export default ProductPage