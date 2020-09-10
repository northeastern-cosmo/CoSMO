import React from "react"
import styled from "styled-components"
import logo from "./logo.svg"

import { LogoContainer } from "./header"
import SocialMedia from "../social-media"

const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  max-width: 1400px;
`

const Layout = styled.div`
  display: flex;
  flex-direction: row;
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
    <footer style={{ backgroundColor: "#020a39" }}>
      <FooterContainer>
        <Layout style={{ justifyContent: "space-between" }}>
          <Layout>
            <div>
              <LogoContainer
                src={logo}
                alt="cosmo logo"
                height="90"
                width="90"
              />
            </div>
            <div>
              <Title>Northeastern University</Title>
              <Cosmo>Computer Science Mentoring Organization</Cosmo>
            </div>
          </Layout>
          <Layout>
            <Title>Follow us on social media!</Title>
          </Layout>
        </Layout>
        <div className="container">
          <SocialMedia />
        </div>
      </FooterContainer>
    </footer>
  )
}

export default Footer
