import styled from "styled-components"
import SectionContainer from "./section-container"
import { useScrollMonitor } from "scrollmonitor-hooks"
import React, { useRef } from "react"

const TitleContainer = styled.div`
  padding: 100px 100px 0px 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  max-width: 1400px;
  margin: auto;
`

const Name = styled.p`
  width: 530px;
  font-family: Nunito Sans;
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
  color: #ffffff;
  text-align: left;
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
  align-items: flex-start;
  position: relative;
  height: 100%;
  width: 100%;
`

const Community = ({ callbacks }) => {
  const ref = useRef(null)
  useScrollMonitor(ref, callbacks)
  return (
    <SectionContainer callbacks={callbacks}>
      <TitleContainer>
        <Name ref={ref}>Diverse and Growing Community</Name>
        <InfoContainer>
          <InfoSection>
            We're creating an environment where students can meet other students
            interested in Computer Science. Having a network of people to reach
            out to who have gone through or are going through similar things
            (such as applying to co-ops, taking the same classes) and creating
            that community is something many have found beneficial in their
            early years and beyond!
          </InfoSection>
          <InfoSection>
            CoSMO plans events where students are able to meet others and start
            to make connections, or at the very least learn about different
            viewpoints and aspects of computer science from their peers.
          </InfoSection>
        </InfoContainer>
      </TitleContainer>
    </SectionContainer>
  )
}

export default Community
