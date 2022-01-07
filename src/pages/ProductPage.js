import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import ProductFeed from "../components/ProductFeed"

const Container = styled.div``

function ProductPage() {
  return (
    <Container>
      <Navbar style={{"z-index": "100"}}/>
      <ProductFeed/>
    </Container>
  )
}

export default ProductPage