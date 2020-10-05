import React, { useState } from "react"
import styled from "styled-components"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  overflow: hidden;
`
const Name = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
`

const Major = styled.div`
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const Info = styled.div`
  font-size: 16px;
  line-height: 16px;
`
const Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`

const MentorContainer = styled.div`
  padding: 20px;
  margin: 20px;
  display: flex;

  min-width: 375px;
  width: 30%;
  height: ${({ isOpen = false }) => (isOpen ? "auto" : "300px")};
  cursor: pointer;

  background: ${props => (props.isOpen ? "#ffffff" : "#d9e2ff")};
`

const InterestContainer = styled.div`
  display: inline-flex;
  flex-grow: 0;
  flex-wrap: wrap;

  margin-top: 16px;
`

const Mentor = ({
  firstName,
  lastName,
  pronouns,
  year,
  major,
  minor,
  concentration,
  email,
  interests = [],
  experience = [],
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MentorContainer
      isOpen={isOpen}
      onClick={() => setIsOpen(prevOpen => !prevOpen)}
    >
      <Layout>
        <Name>{firstName}</Name>
        <Name>{lastName}</Name>
        <p>{pronouns}</p>
        <Major>{major}</Major>
        {minor && <Major>{`Minor(s): ${minor}`}</Major>}
        {concentration && <Major>{`Concentration(s): ${concentration}`}</Major>}
        <Info>{`Email: ${email}`}</Info>
        <Info>{`Year: ${year}`}</Info>
        {!isOpen && (
          <InterestContainer>
            {interests.map(skill => {
              const combSkill = skill.split(" ").join("_")
              return (
                <p
                  key={skill}
                  style={{
                    fontStyle: "italic",
                    marginRight: "8px",
                    marginBottom: "0px",
                  }}
                >{`#${combSkill}`}</p>
              )
            })}
          </InterestContainer>
        )}
      </Layout>
      {isOpen && (
        <Layout style={{ marginTop: "32px" }}>
          {interests.length ? (
            <>
              <Header>{"Interests"}</Header>
              <Info>
                <ul>
                  {interests.map(interest => (
                    <li key={interest}>{interest}</li>
                  ))}
                </ul>
              </Info>
            </>
          ) : null}
          {experience.length ? (
            <>
              <Header>{`Work Experience`}</Header>
              <Info>
                <ul>
                  {experience.map(workExp => (
                    <li key={workExp}>{workExp}</li>
                  ))}
                </ul>
              </Info>
            </>
          ) : null}
        </Layout>
      )}
    </MentorContainer>
  )
}

export default Mentor
