import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { getProductFetch } from "../requestMethods"
import Product from "./Product"
import SortIcon from '@mui/icons-material/Sort';

const Container = styled.div`
width: 100%;
font-family: 'Lato', sans-serif;
/* background-color: #F6F6F6; */

`

const FilterBar = styled.div`
height: 10vh;
/* border: 1px solid gray; */
display: flex;
align-items: center;
justify-content: space-between;
/* background-color: #F6F6F6; */
/* border-top: 20px solid #99A9B9; */
border-top: 1px solid lightgray;
margin-bottom: 20px;
color: black;
`

const ProductList = styled.div`
width: 83vw;
display: flex;
margin: 0 auto;
justify-content: center;

`
const CategoryName = styled.div`
margin-left: 95px;
font-size: 30px;
font-weight: 300;`

const FilterContainer = styled.div`
margin-right: 95px;
display: flex;
justify-content: space-between;
/* border: 1px solid gray; */
width: 12vw;
align-items: center;
`

const Category = styled.div``

const Price = styled.div``

const Icon = styled.div`
margin-right: 5px;
margin-top: 6px;`

function ProductFeed() {
    const [fetchedProductData, setFetchedProductData] = useState()

    const fetchProducts = () => {
        getProductFetch(setFetchedProductData)
        console.log(fetchedProductData);
        console.log("test");
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <Container>
            <FilterBar>
                <CategoryName>All Products</CategoryName>
                <FilterContainer>
                    <Icon><SortIcon/></Icon>
                    <Category>Category: All</Category>
                    <Price>Price: All</Price>
                </FilterContainer>
            </FilterBar>
            <ProductList>
                {fetchedProductData && fetchedProductData.map((item, index) => {
                return <Product item={item} index={index} />
            })}
            </ProductList>
            <ProductList>
                {fetchedProductData && fetchedProductData.map((item, index) => {
                return <Product item={item} index={index} />
            })}
            </ProductList>
            <ProductList>
                {fetchedProductData && fetchedProductData.map((item, index) => {
                return <Product item={item} index={index} />
            })}
            </ProductList>
        </Container>
    )
}

export default ProductFeed