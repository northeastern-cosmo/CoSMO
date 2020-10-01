import React, { useState } from "react"
import styled from "styled-components"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
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

  margin: 10px 0px;
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

  flex-basis: 20%;

  background: ${props => (props.isOpen ? "#ffffff" : "#d9e2ff")};
`

const Mentor = ({
  firstName,
  lastName,
  year,
  major,
  minor,
  concentration,
  email,
  skills = [],
  work = [],
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MentorContainer isOpen={isOpen}>
      <div onClick={() => setIsOpen(prevOpen => !prevOpen)}>
        <Layout>
          <Name>{firstName}</Name>
          <Name>{lastName}</Name>
          <Layout>
            <Major>{major}</Major>
            {minor && <Major>{`Minor(s): ${minor}`}</Major>}
            {concentration && (
              <Major>{`Concentration (s): ${concentration}`}</Major>
            )}
          </Layout>
          <Info>{year}</Info>
          <Info>{email}</Info>
          {!isOpen && <p>{skills.map(skill => `#${skill} `)}</p>}
        </Layout>
        {isOpen && (
          <div>
            <Layout>
              {skills.length ? (
                <>
                  <Header>{`Skills`}</Header>
                  <Info>
                    <ul>
                      {skills.map(skill => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </Info>
                </>
              ) : null}
              {work.length ? (
                <>
                  <Header>{`Work Experience`}</Header>
                  <Info>
                    <ul>
                      {work.map(workex => (
                        <li key={workex}>{workex}</li>
                      ))}
                    </ul>
                  </Info>
                </>
              ) : null}
            </Layout>
          </div>
        )}
      </div>
    </MentorContainer>
  )
}

export default Mentor
