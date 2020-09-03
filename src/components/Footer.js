import React from 'react';
import styled from "styled-components"
import logo from '/Users/anushaarora/IdeaProjects/cosmo/src/images/ clearLogo.png';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  `

const Title = styled.div`
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 25px;
color: #D9E2FF;
`

const Cosmo = styled.div`
font-style: italic;
font-weight: bold;
font-size: 20px;
line-height: 27px;
color: #FFFFFF;
`

const Footer = () => {
    return(
        <div className="main-footer">
            <Layout style={{justifyContent: 'space-between'}}>
<Layout>
                    <Layout >
                    <div>
                    <img src={logo} alt="website logo" height="90" width="90"/>
                    </div>
                    </Layout>
                    <Layout>
                    <div>
                       <Title>Northeastern University</Title>
                       <Cosmo>Computer Science Mentoring Organization</Cosmo>
                    </div>
                    </Layout>
                    </Layout>
                    <Layout>
                        <Title >Follow us on social media!</Title>
                    </Layout>
            </Layout>
            <div className="container">
             
            </div>
        </div>
    )
}

export default Footer;