import React from "react"
import styled, { css } from "styled-components"

import { LogoContainer } from "./header"
import SocialMedia from "../social-media/social-media"

const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  max-width: 1400px;
`

export const Layout = styled.div`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};

  ${props =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}

  ${props =>
    props.align &&
    css`
      align-items: ${props.align};
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
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
`

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#020a39", flexShrink: 0, zIndex: 5 }}>
      <FooterContainer>
        <Layout justify="space-between">
          <Layout>
            <Layout direction="column" justify="center">
              <Title>Northeastern University</Title>
              <Cosmo>Computer Science Mentoring Organization</Cosmo>
            </Layout>
          </Layout>
          <Layout align="flex-end" direction="column">
            <Title style={{ marginTop: "-7px" }}>
              Follow us on social media!
            </Title>
            <SocialMedia />
          </Layout>
        </Layout>
      </FooterContainer>
    </footer>
  )
}

export default Footer
