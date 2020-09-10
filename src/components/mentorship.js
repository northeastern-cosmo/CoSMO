import styled from "styled-components"
import SectionContainer from "./section-container"
import { useScrollMonitor } from "scrollmonitor-hooks"
import React, { useRef } from "react"

// FALL 2020 SIGN UP FORM LINKS
const mentorFormURL = "https://forms.gle/mSW8FLArBCzpqeAq8"
const menteeFormURL = "https://forms.gle/k4LWyKxYKR94pMUN8"

const TitleContainer = styled.div`
  padding: 100px 100px 0px 100px;
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
  color: #ffffff;
  text-align: right;
  margin-right: 30px;
`
const InfoSection = styled.div`
  max-width: 700px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 33px;
  text-align: left;
  color: black;
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  flex-wrap: wrap;
`
const Button = styled.a`
  text-decoration: none;
  background-color: #041454;
  color: white;

  padding: 10px;
  border-radius: 15px;

  cursor: pointer;
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
            semesters. Sign-ups are currently open for
            <a href={mentorFormURL}> mentors</a> and
            <a href={menteeFormURL}> mentees</a>. No experience is necessary to
            join the program, and everyone who signs up will be paired with a
            mentor.
          </InfoSection>
          <InfoSection>
            Check out our mentorship FAQ or contact us for more information!
          </InfoSection>
          <ButtonContainer>
            <Button role="button" href={mentorFormURL}>
              Sign up to be a MENTOR
            </Button>
            <Button role="button" href={menteeFormURL}>
              Sign up to be a MENTEE
            </Button>
          </ButtonContainer>
        </InfoContainer>
      </TitleContainer>
    </SectionContainer>
  )
}

export default Mentorship
