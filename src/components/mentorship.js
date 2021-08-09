import styled from "styled-components"
import SectionContainer from "./section-container"
import { useScrollMonitor } from "scrollmonitor-hooks"
import React, { useRef } from "react"

const TitleContainer = styled.div`
  padding: 100px 100px 0px 100px;
  display: flex;
  max-width: 1400px;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  height: 100%;
  margin: auto;
`

const Name = styled.p`
  width: 100%;
  font-family: Nunito Sans;
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
  color: #ffffff;
`
const InfoSection = styled.div`
  max-width: 700px;
  font-family: Nunito Sans;
  font-style: normal;
  font-size: 22px;
  line-height: 33px;
  text-align: left;
  color: black;
  text-wrap: pre;
  margin-bottom: 30px;
  color: #ffffff;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  width: 100%;
`

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
`

const Mentorship = ({ callbacks }) => {
  const ref = useRef(null)
  useScrollMonitor(ref, callbacks)
  return (
    <SectionContainer callbacks={callbacks}>
      <TitleContainer>
        <Name>Rooted in Mentorship</Name>
        <InfoContainer>
          <InfoSection ref={ref}>
            We're providing resources to help guide students interested in
            Computer Science through our mentorship program. Our program creates
            an additional layer of support for students entering Northeastern
            and exploring Computer Science. Beyond the larger CoSMO community,
            the mentorship program allows students new to Computer Science to
            connect with an older Khoury student on a more personal level.
            One-on-one mentorship relationships are great opportunities, whether
            you have specific questions regarding co-op, adapting to life as a
            student at Northeastern, or a career in computer science.
          </InfoSection>
          <InfoSection>
            The mentorship program runs during both the fall and spring
            semesters. No experience is necessary to join the program.{" "}
            <Link href="mailto:nucsmo@gmail.com">Reach out to us</Link> about
            more information regarding the mentorship program for the Fall 2021
            semester.
          </InfoSection>
        </InfoContainer>
      </TitleContainer>
    </SectionContainer>
  )
}

export default Mentorship
