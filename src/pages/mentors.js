import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import TempMessage from "../components/mentor/mentorTempMessage"
import Mentor from "../components/mentor/mentor"
import ContactBox from "../components/mentor/contactBox"

const MentorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const ContactContainer = styled.div`
background: #A6ADD8;
padding: 20px;
margin 20px;

flex-basis: 20%;
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3%;
`

const SearchText = styled.h5`
  color: white;
`

const SearchBoxText = styled.div`
  display: flex;
  position: relative;
`

const Search = styled.input`
  flex-grow: 1;
  padding: 5px 15px;
  border-radius: 30px;
  color: #606060;
`

const SearchIcon = styled.span`
  position: absolute;
  top: 3px;
  right: 15px;
`

export const TitleContainer = styled.h1`
  font-size: calc(48px + (96 - 24) * ((100vw - 320px) / (1600 - 320)));
  color: white;
  font-family: "Nunito Sans";
  font-weight: normal;
`

const MentorPage = styled.div`
  padding: 4%;

  @media screen and (min-width: 930px) {
    padding: 0px 75px;
  }
`
const hasStarted = true

const MentorsPage = () => {
  const data = useStaticQuery(graphql`
    query getMentors {
      allMentorsJson {
        nodes {
          email
          experience
          firstName
          interests
          lastName
          major
          minor
          concentration
          pronouns
          experience
          year
        }
      }
    }
  `)

  const mentors = data.allMentorsJson.nodes

  return (
    <Layout>
      <MentorPage>
        <TitleContainer>
          <div>Our Mentors</div>
        </TitleContainer>
        {hasStarted ? (
          <>
            {/* <SearchContainer>
              <SearchText>
                Search for someone by name, experience, skills, etc!
              </SearchText>
              <SearchBoxText>
                <Search
                  type="text"
                  placeholder="Search for someone by name, experience, skills, etc!"
                />
                <SearchIcon className="material-icons">search</SearchIcon>
              </SearchBoxText>
            </SearchContainer> */}
            <MentorsContainer>
              {mentors.map(mentor => {
                return (
                  <Mentor
                    key={`${mentor.firstName}-${mentor.lastName}`}
                    {...mentor}
                  />
                )
              })}
              <ContactContainer>
                <ContactBox />
              </ContactContainer>
            </MentorsContainer>
          </>
        ) : (
          <TempMessage semester="Fall 2020" />
        )}
      </MentorPage>
    </Layout>
  )
}

export default MentorsPage
