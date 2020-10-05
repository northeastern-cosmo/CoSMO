import React, { useState } from "react"
import styled from "styled-components"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
`

const Message = styled.p`
  margin-top: 10px;
`
const ContactBox = () => {
  return (
    <Layout>
      <Header>{"Interested in Mentorship?"}</Header>
      <Message>
        Email us at nucsmo@gmail.com to ask how to get involved!
      </Message>
    </Layout>
  )
}

export default ContactBox
