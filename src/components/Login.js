import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ContainerContainer = styled.div`
border: 1px solid black;
width: 50vw;
height: 70vh;
margin-top: 50px;
`

const LeftCont = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;`

const FormWrapper = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input``

const ButtonCont = styled.div`
display: flex;
justify-content: space-between;`


const Button = styled.button`
`
const RightCont = styled.div``

const Image = styled.image``

function Login() {
    const [login, setLogin] = useState(true)

    return (
        <Container>
            <ContainerContainer>
            <LeftCont>
                <FormWrapper>
                    <Input placeholder="username"></Input>
                    <Input placeholder="password"></Input>
                    <ButtonCont>
                        <Button >Sign Up</Button>
                        <Button>Sign In</Button>
                    </ButtonCont>
                </FormWrapper>
            </LeftCont>
            <RightCont>
                <Image></Image>
            </RightCont>
            </ContainerContainer>
        </Container>
    )
}

export default Login