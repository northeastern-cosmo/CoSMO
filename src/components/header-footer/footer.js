import React from "react"
import styled, { css } from "styled-components"
import logo from "./logo.svg"

import { LogoContainer } from "./header"
import SocialMedia from "../social-media/social-media"

const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  max-width: 1400px;
`

const Layout = styled.div`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};

  ${props =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
`

const Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #d9e2ff;
`

const Cosmo = styled.div`
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
`

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#020a39", flexShrink: 0 }}>
      <FooterContainer>
        <Layout justify="space-between">
          <Layout>
            <LogoContainer src={logo} alt="cosmo logo" height="90" width="90" />
            <Layout
              direction="column"
              justify="center"
              style={{ marginLeft: "15px" }}
            >
              <Title>Northeastern University</Title>
              <Cosmo>Computer Science Mentoring Organization</Cosmo>
            </Layout>
          </Layout>
          <Layout>
            <Title>Follow us on social media!</Title>
            <SocialMedia />
          </Layout>
        </Layout>
      </FooterContainer>
    </footer>
  )
}

export default Footer
