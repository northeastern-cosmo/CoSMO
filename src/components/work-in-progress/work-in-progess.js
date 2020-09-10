import React from "react"
import wipWords from "./wip_words.svg"

import styled from "styled-components"

import { LogoContainer } from "../header-footer/header"

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

const WorkInProgress = () => {
  return (
    <Container>
      <LogoContainer src={wipWords} width="100%" height="100%" />
    </Container>
  )
}

export default WorkInProgress
