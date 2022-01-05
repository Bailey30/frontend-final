import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
margin: 10px`

const Button = styled.button`
color: ${props => props.color}`



const Image = styled.img``

const PasswordInput = styled.input``



function Example() {
    return (
        <Container>
            <Button color="red"></Button>
            <Button color="blue"></Button>
            <PasswordInput></PasswordInput>
            <Image></Image>
        </Container>
    )
}

export default Example