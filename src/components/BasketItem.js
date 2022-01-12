import React, {useEffect, useState} from "react"
import styled from "styled-components"

const Container = styled.div``

function BasketItem({item, index}){
    return(
        <Container>
            <ImageCont>
                <Image src={item.img}></Image>
            </ImageCont>
            <RightCont>

            </RightCont>
        </Container>
    )
}

return default BasketItem