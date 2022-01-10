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
const SectionCont = styled.div`
width: 93vw;
box-shadow: -10px 40px 40px 5px rgba(0,0,0,0.1);
margin: 0 auto;
`
const FilterBar = styled.div`
height: 10vh;
width: 93vw;
margin: 0 auto;
/* border: 1px solid gray; */
display: flex;
align-items: center;
justify-content: flex-start;
/* background-color: #F6F6F6; */
/* border-top: 20px solid #99A9B9; */
border-top: 1px solid lightgray;
margin-bottom: 0px;
background: white;
position: relative;
/* z-index: -1; */
`

const ProductList = styled.div`
width: 90vw;
display: flex;
flex-wrap: wrap;
margin: 0 auto;
justify-content: center;
gap: 22px;
/* border: 1px solid gray; */
position: relative;
/* z-index: 100; */


`
const CategoryName = styled.div`
margin-left: 30px;
font-size: 30px;
font-weight: 300;
margin-right: 20px;
`

const FilterContainer = styled.div`
margin-right: 95px;
display: flex;
justify-content: space-evenly;
/* border: 1px solid gray; */
width: 20vw;
align-items: center;
margin-left: 40px;

`

const Category = styled.div`
margin: 0 5px;`

const Price = styled.div`
margin: 0 5px;`

const Icon = styled.div`
margin-right: 5px;
margin-top: 6px;`

const CategoryCont = styled.div`
display: flex;
align-items: center;`

const PriceCont = styled.div`
display: flex;
align-items: center;`

const Select = styled.select`
margin-top: 3px;
border: none;`

const Option = styled.option``

function ProductFeed() {
    const [fetchedProductData, setFetchedProductData] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [sort, setSort] = useState("")
    console.log(sort);


    const fetchProducts = () => {
        getProductFetch(setFetchedProductData)
        console.log("test");
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    // useEffect(() => {

    //     console.log(fetchedProductData);
    //     // setFilteredProducts(fetchedProductData)

    // }, [fetchedProductData])

    console.log(filteredProducts);
    useEffect(() => {
        const data = fetchedProductData
        if (sort === "asc") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
        } else if (sort === "desc") {
            setFilteredProducts(data.sort((a, b) => b.price - a.price))
        } else
            console.log(filteredProducts);
    }, [sort])

    return (
        <Container>
            <SectionCont>
            <FilterBar>
                <CategoryName>All Products</CategoryName>
                <FilterContainer>
                    <Icon><SortIcon /></Icon>
                    <CategoryCont>
                        <Category>Category:</Category>
                        <Select onChange={(e) => setSort(e.target.value)}>
                            {/* <Option value="newest">Newest</Option> */}
                            <Option value="asc">Cups</Option>
                            <Option value="desc">Vases</Option>
                            <Option value="desc">Ceramic</Option>
                            <Option value="desc">Bowls</Option>
                        </Select>
                    </CategoryCont>
                    <PriceCont>
                        <Price>Price:</Price>
                        <Select onChange={(e) => setSort(e.target.value)}>
                            {/* <Option value="newest">Newest</Option> */}
                            <Option value="asc">Lowest first</Option>
                            <Option value="desc">Highest first</Option>
                        </Select>
                    </PriceCont>
                </FilterContainer>
            </FilterBar>

            <ProductList>
                {sort ?
                    filteredProducts.map((item, index) => {
                        return <Product item={item} index={index} />
                    })
                    :
                    fetchedProductData.map((item, index) => {
                        return <Product item={item} index={index} />
                    })
                }

            </ProductList>
</SectionCont>

    
        </Container>
    )
}

export default ProductFeed