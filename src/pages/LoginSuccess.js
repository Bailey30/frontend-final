import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div``

function LoginSuccess({user, setUser}) {
  return (
    <Container>
      You have been logged in
    </Container>
  )
}

export default LoginSuccess