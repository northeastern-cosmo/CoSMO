import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


import Image from "../components/image"
import Landing from "../components/landing"
import Values from "../components/values"

const Background = styled.div`
background: #041454;
`

const IndexPage = () => (
  <Background>
    <Landing/>
    <Values/>
    <Link to="/mentors/">Go to mentors page</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Background>
)

export default IndexPage
