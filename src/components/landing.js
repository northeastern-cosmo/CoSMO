import styled from "styled-components";
import SectionContainer from "./section-container";
import { useScrollMonitor } from 'scrollmonitor-hooks';
import React, { useRef } from "react"

const TitleContainer = styled.div`
padding: 100px 100px 0px 100px;
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
margin-bottom: 100px;
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

const Landing = ({callbacks}) => {
    const ref = useRef(null);
    useScrollMonitor(ref, callbacks);
    return (
        <SectionContainer callbacks={callbacks}>
            <TitleContainer>
                <University>Northeastern University</University>
                <Name ref={ref}>Computer Science Mentoring Organization</Name>
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