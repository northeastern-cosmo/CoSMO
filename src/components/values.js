import React from 'react';
import styled from "styled-components";
import SectionContainer from "./section-container";
import Showcase from "./showcase";
import logo from '../images/ clearLogo.png';

const Title = styled.p`
font-family: Nunito Sans;
font-style: normal;
font-weight: 800;
font-size: 48px;
line-height: 65px;
margin-top: 80px;
margin-left: 100px;
margin-right: 100px;
max-width: 1050px;
color: white;
`
const valuesSectionShowcaseProps = {
    itemProps: [
        {
            key: 0,
            imgsrc: logo,
            alt: "logo"
        },
        {
            key: 1,
            imgsrc: logo,
            alt: "logo"
        },
        {
            key: 2,
            imgsrc: logo,
            alt: "logo"
        }
    ]
}

const Values = () => {
    return (
        <SectionContainer>
            <Title>
                Our goals... idk what to put here lol but this is space we can put more info
                </Title>
            <Showcase props={valuesSectionShowcaseProps}/>
        </SectionContainer>
    )
}

export default Values;