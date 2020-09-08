import React from 'react';
import styled from "styled-components";
import SectionContainer from "./section-container";

const TitleContainer = styled.div`
padding: 245px 100px 0px 100px;
`
const University = styled.p`
font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 49px;
color: #D9E2FF;
`

const Name = styled.p`
width: 530px;
font-family: Nunito Sans;
font-style: italic;
font-weight: bold;
font-size: 48px;
line-height: 65px;
color: #FFFFFF;
`
const InfoSection = styled.div`
max-width: 600px;
font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 33px;
text-align: right;
color: white;
text-wrap: pre;
margin-bottom: 30px;
`
const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
position: relative;
height: 100%;
width: 100%;
`

/*

const Background = styled.div`
position: relative;
width: 100%;
height: auto;
overflow: hidden;
`

<Background>
    <svg width="1440" height="852" viewBox="0 0 1440 852" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M563 518.5C383 563.5 -2.5 622 -2.5 853.5H1441V0.5H959.5C956.333 158.167 827.591 452.352 563 518.5Z" fill="#A6ADD8"/>
    </svg>
</Background>

*/

const Landing = ({ callbacks }) => {
    return (

        <SectionContainer callbacks={callbacks}>
            <TitleContainer>
                <University>Northeastern University</University>
                <Name>Computer Science Mentoring Organization</Name>
                <InfoContainer>
                    <InfoSection>Northeastern's Computer Science Mentoring Organization serves to better connect Northeastern students who are interested in computer science.</InfoSection>
                    <InfoSection>We run a mentorship program every semester where undergraduates who are interested in computer science can get the help they need with classes, co-ops, and more.</InfoSection>
                    <InfoSection>CoSMO is open to all. No prior CS experience required!</InfoSection>
                </InfoContainer>
            </TitleContainer>
        </SectionContainer>
    )
}

export default Landing;