import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"
import logo from "./logo.svg"

export const LogoContainer = styled.img`
  height: ${({ height = 105 }) => `${height}px`};
  width: ${({ width = 105 }) => `${width}px`}};

  margin-bottom: 0;

  @media (max-width: 480px) {
    height: ${({ height = 105 }) => `${height * 0.7}px`};
  width: ${({ width = 105 }) => `${width * 0.7}px`}};
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 1.25rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
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
      position: "sticky",
      top: 0,
    }}
  >
    <HeaderContainer>
      <Link to="/">
        <LogoContainer src={logo} alt="cosmo logo" width="90" height="90" />
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
