/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

import Header from "./header-footer/header"
import Footer from "./header-footer/footer"
import "./layout.css"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: ${({ page = "other" }) => (page === "homepage" ? "100%" : "100vh")};
`

const Layout = ({ children, page }) => {
  return (
    <Container page={page}>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1600,
          flex: "1 0 auto",
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </Container>
  )
}

export default Layout
