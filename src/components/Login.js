import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { loginFetch, signUpFetch } from "../requestMethods"
import {mobile, tablet} from "../responsive"

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
background: #F6F8FA;
`
const ContainerContainer = styled.div`
display: flex;
width: 50vw;
height: 75vh;
margin-top: 50px;
background: white;
box-shadow: 0px 10px 40px 5px rgba(0,0,0,0.1);
${mobile({width: "90vw"})}
/* ${tablet({width: "70vw"})} */
`

const LeftCont = styled.div`
width: 55%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
${mobile({width: "100%"})}
${tablet({width: "100%"})}
`

const Heading = styled.div`
margin: 0 auto;
color: #99A9B9;
text-align:center;`

const FormWrapper = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 70%;
`


const Input = styled.input`
padding: 20px;
margin: 10px 0;
width: auto;
background: #F6F8FA;
border:  2px solid lightgray;
border-radius: 7px;
outline: none;
transition: all 0.3s ease;;
&:focus{
    border:  2px solid #99A9B9;
};
`

const ButtonCont = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0;

`

const Button = styled.button`
width: 100%;
height: 50px;
border-radius: 5px;
border: none;
background: ${props => props.color === "99A9B9" ? "#99A9B9" : "none"};
border: 2px solid #${props => props.border};
color: ${props => props.text};
cursor: pointer;
`
const RightCont = styled.div`
width:45%;
position: relative;
overflow: hidden;
${mobile({display: "none"})}
${tablet({display: "none"})}

`

const Image = styled.img`
height: 100%;
position: absolute;
right: 0;
object-fit: cover;
`
const Checkbox = styled.input.attrs({ type: "checkbox" })`
`
const AgreementCont = styled.div`
display: flex;
align-items: center;
`
const Agreement = styled.p`
margin-left:20px;`

const LoginRegisterLink = styled.div`
display:flex;
justify-content:center;`

const Choice = styled.button`
border: none;
background: none;
`


function Login() {
    const [login, setLogin] = useState(true)
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    console.log(username)
    console.log(email)
    console.log(password)
    const LoginTrueFalse = (e) => {
        e.preventDefault()
        setLogin(!login)
    }

    const handler = async (e) => {
        e.preventDefault();
        console.log(login);
    try {
      if (!login) {
        signUpFetch(username, email, password, setUser);
      } else {
        loginFetch(email, password, setUser);
      }
        } catch (error) {}
    };
    
    return (
        <Container>
            <ContainerContainer>
                <LeftCont>
                    <FormWrapper>
                        <Heading>{login ? <h1>Welcome back</h1> : <h1>Create Account</h1>}</Heading>
                        {login ? null : <Input onChange={(e) => setUsername(e.target.value)} placeholder="username"></Input>}
                        <Input onChange={(e) => setEmail(e.target.value)} placeholder="email"></Input>
                        <Input onChange={(e) => setPassword(e.target.value)} placeholder="password"></Input>
                        {login ? null :
                            <AgreementCont>
                                <Checkbox type="checkbox"></Checkbox>
                                <Agreement> I agree to the terms and privacy policy</Agreement>
                            </AgreementCont>
                        }
                        <ButtonCont>
                            <Button onClick={handler} color="99A9B9" text="white">{login ? "Sign in" : "Sign Up"}</Button>
                            {/* <Button border="99A9B9" text="black">Sign In</Button> */}
                        </ButtonCont>
                        <LoginRegisterLink><Choice onClick={LoginTrueFalse}>{login ? "Need to create an account?" : "Already have an account?"}</Choice></LoginRegisterLink>
                    </FormWrapper>
                </LeftCont>
                <RightCont>
                    <Image src="https://images.unsplash.com/photo-1611937009263-1e8988f5d82a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1921&q=80"></Image>
                </RightCont>
            </ContainerContainer>
        </Container>
    )
}

export default Login