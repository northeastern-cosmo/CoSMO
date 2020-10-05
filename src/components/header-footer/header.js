import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"
import logo from "./logo.svg"

export const LogoContainer = styled.img`
  height: ${({ height = 105 }) => `${height}px`};
  width: ${({ width = 105 }) => `${width}px`}};

  margin-bottom: ${({ bottom = 0 }) => bottom + "px"};
  margin-top: ${({ top = 0 }) => top + "px"};
  margin-left: ${({ left = 0 }) => left + "px"};

  @media (max-width: 480px) {
    height: ${({ height = 105 }) => `${height * 0.7}px`};
    width: ${({ width = 105 }) => `${width * 0.7}px`}};
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1400px;

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
  padding-right: 10px;
`

const LinkContainer = styled(Link)`
  color: #d9e2ff;
  text-decoration: none;

  &:not(:last-child) {
    padding-right: 49px;
  }
`

const Header = () => {
  const logoMargins = {
    bottom: 10,
    top: 10,
    left: 10,
  }

  return (
    <header
      style={{
        background: `#020a39`,
        position: "sticky",
        top: 0,
        zIndex: 5,
      }}
    >
      <HeaderContainer>
        <Link to="/">
          <LogoContainer
            src={logo}
            alt="cosmo logo"
            width="90"
            height="90"
            {...logoMargins}
          />
        </Link>
        <Links>
          <LinkContainer to="/mentors">mentors</LinkContainer>
          <LinkContainer to="/news">news</LinkContainer>
          <LinkContainer to="/team">team</LinkContainer>
        </Links>
      </HeaderContainer>
    </header>
  )
}

export default Header
