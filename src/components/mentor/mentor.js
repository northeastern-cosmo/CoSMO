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

const years = {
  1: "1st",
  2: "2nd",
  3: "3rd",
  4: "4th",
  5: "5th",
}

const MentorContainer = styled.div`
  padding: 20px;
  margin: 20px;

  flex-basis: 20%;

<<<<<<< HEAD
  background: ${props => (props.isOpen ? "#fffff" : "#d9e2ff")};
=======
  background: ${props => (props.isOpen ? "#ffffff" : "#d9e2ff")};
>>>>>>> c950a146c0fc7a66f8cb9a8dbcf41234e3b61417
`

const Mentor = ({
  firstName,
  lastName,
  year,
  major,
  email,
  skills = [],
  work = [],
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const strYear = years[year]

  return (
    <MentorContainer isOpen={isOpen}>
      <div onClick={() => setIsOpen(prevOpen => !prevOpen)}>
        <Layout>
          <Name>{firstName}</Name>
          <Name>{lastName}</Name>
          <Layout>
            <Major>{major}</Major>
            <Major>concentration</Major>
          </Layout>
          <Info>{`${strYear} Year`}</Info>
          <Info>{email}</Info>
<<<<<<< HEAD
=======
          {!isOpen && <p>{skills.map(skill => `#${skill} `)}</p>}
>>>>>>> c950a146c0fc7a66f8cb9a8dbcf41234e3b61417
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
<<<<<<< HEAD
               {work.length ? (
=======
              {work.length ? (
>>>>>>> c950a146c0fc7a66f8cb9a8dbcf41234e3b61417
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
