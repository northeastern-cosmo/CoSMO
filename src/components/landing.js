import styled from "styled-components"
import SectionContainer from "./section-container"
import { useScrollMonitor } from "scrollmonitor-hooks"
import React, { useRef } from "react"

import SocialMedia from "../components/social-media/social-media"

const TitleContainer = styled.div`
  padding-top: 80px;
`
const University = styled.p`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  color: #d9e2ff;
`

const Name = styled.p`
  width: 530px;
  font-family: Nunito Sans;
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
  color: #ffffff;
  margin-bottom: 100px;
`
const InfoSection = styled.div`
  max-width: 600px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
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
const HiddenContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-family: Nunito Sans;
  color:  #020a39;
  align-items: flex-end;
  position: relative;
  margin-top: -100px;
  margin-bottom: 80px;
`
const Landing = ({ callbacks }) => {
  const ref = useRef(null)
  useScrollMonitor(ref, callbacks)
  return (
    <SectionContainer callbacks={callbacks}>
      <TitleContainer>
        <University>Northeastern University</University>
        <Name ref={ref}>Computer Science Mentoring Organization</Name>
      </TitleContainer>
      <HiddenContainer>
        🎃 welcome to our *spooky* scavenger hunt,
        can you find all the hidden halloween emojis? <br />
        try highlighting, clicking, and inspecting elements
      </HiddenContainer>
      <InfoContainer>
        <InfoSection>
          Northeastern's Computer Science Mentoring Organization serves to
          better connect Northeastern students who are interested in computer
          science.
        </InfoSection>
        <InfoSection>
          We run a mentorship program every semester where undergraduates who
          are interested in computer science can get the help they need with
          classes, co-ops, and more.
        </InfoSection>
        <InfoSection>
          CoSMO is open to all. No prior CS experience required!
        </InfoSection>
        <SocialMedia />
      </InfoContainer>
    </SectionContainer>
  )
}

export default Landing
