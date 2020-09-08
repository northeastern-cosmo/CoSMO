import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"
import logo from "./logo.svg"

const LogoContainer = styled.img`
  height: 105px;
  width: 105px;

  margin-bottom: 0;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Links = styled.div`
  display: flex;
  align-items: baseline;
`

const LinkContainer = styled(Link)`
  color: #d9e2ff;
  text-decoration: none;

  &:not(:last-child) {
    padding-right: 49px;
  }
`

const Header = () => (
  <header
    style={{
      background: `#020a39`,
    }}
  >
    <HeaderContainer>
      <Link to="/">
        <LogoContainer src={logo} />
      </Link>
      <Links>
        <LinkContainer to="/">about</LinkContainer>
        <LinkContainer to="/mentors">mentors</LinkContainer>
        <LinkContainer to="/">news</LinkContainer>
        <LinkContainer to="/">team</LinkContainer>
      </Links>
    </HeaderContainer>
  </header>
)

export default Header
