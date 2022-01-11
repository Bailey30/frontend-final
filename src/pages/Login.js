import React, { useEffect, useState } from "react"
import Login from "../components/Login"
import styled from "styled-components"
import Navbar from "../components/Navbar"

const Container = styled.div``



function LoginPage({user, setUser}) {
  return (
    <Container>
      <Navbar/>
      <Login user={user} setUser={setUser}/>
    </Container>
  )
}

export default LoginPage