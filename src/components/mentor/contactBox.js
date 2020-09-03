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
color: #FFFFFF;
`
const ContactBox = () => {
  
    return (
      <div>
        <Layout>
            <Header>
                {'Interested in Mentorship?'}
            </Header>
            </Layout>
          </div>
    )
  }

  export default ContactBox