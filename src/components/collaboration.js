import styled from "styled-components";
import SectionContainer from "./section-container";
import { useScrollMonitor } from 'scrollmonitor-hooks';
import React, { useRef } from "react"

const TitleContainer = styled.div`
padding: 200px 100px 0px 100px;
display: flex;
flex-direction: column;
align-items: flex-end;
position: relative;
height: 100%;
max-width: 1200px;
margin: auto;
`

const Name = styled.p`
width: 530px;
font-family: Nunito Sans;
font-style: italic;
font-weight: bold;
font-size: 48px;
line-height: 65px;
color: #FFFFFF;
text-align: right;
margin-right: 30px;
margin-bottom: 40px;
`
const InfoSection = styled.div`
max-width: 700px;
font-family: Nunito Sans;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 33px;
text-align: left;
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

const Collaboration = ({callbacks}) => {
    const ref = useRef(null);
    useScrollMonitor(ref, callbacks);
    return (
        <SectionContainer callbacks={callbacks}>
            <TitleContainer ref={ref}>
                <Name>Open and Collaborative</Name>
                <InfoContainer>
                    <InfoSection>Apart from the mentorship program, CoSMO doesn’t have any sort of permanent membership, so feel free to pop into any of our other meetings! Our goal is to bring a variety of programming and introduce students to new experiences on campus and in the Boston area by collaborating with other student led organizations. There are so many opportunities to discover, and we’d love to help you find the next piece of your journey!</InfoSection>
                </InfoContainer>
            </TitleContainer>
        </SectionContainer>
    )
}

export default Collaboration;