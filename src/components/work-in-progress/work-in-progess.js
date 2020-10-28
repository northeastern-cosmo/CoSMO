import React from "react"
import wipWords from "./wip_words.svg"

import styled from "styled-components"

import { LogoContainer } from "../header-footer/header"

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
const HiddenContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-family: Nunito Sans;
  color:  #020a39;
  margin-left: 300px;
  position: absolute;
  z-index: 5;
`

const WorkInProgress = () => {
  return (
    <Container>
      <HiddenContainer>👻 peek a boo! where can you follow us next</HiddenContainer>
      <LogoContainer src={wipWords} width="100%" height="100%" />
    </Container>
  )
}

export default WorkInProgress
