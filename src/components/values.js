import styled from "styled-components"
import SectionContainer from "./section-container"
import Showcase from "./showcase"
import community from "../images/community.svg"
import collaboration from "../images/collaboration.svg"
import mentorship from "../images/mentorship.svg"
import { useScrollMonitor } from "scrollmonitor-hooks"
import React, { useRef } from "react"

const Title = styled.p`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 58px;
  line-height: 65px;
  padding: 80px 100px 100px 100px;
  max-width: 1100px;
  color: white;
`
const valuesSectionShowcaseProps = {
  itemProps: [
    {
      imgsrc: mentorship,
      alt: "Mentorship",
    },
    {
      imgsrc: collaboration,
      alt: "Collaboration",
    },
    {
      imgsrc: community,
      alt: "Community",
    },
  ],
}

const Values = ({ callbacks }) => {
  const ref = useRef(null)
  useScrollMonitor(ref, callbacks)
  return (
    <SectionContainer>
      <Title>
        Our Pillars?? idk what to put here
      </Title>
      <Showcase ref={ref} props={valuesSectionShowcaseProps} />
    </SectionContainer>
  )
}

export default Values
