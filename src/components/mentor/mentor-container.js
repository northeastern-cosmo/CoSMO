import React from "react"
import styled from "styled-components"
import Mentor from "./mentor"
import ContactBox from "./contactBox"

/*
Mentor format:

firstName
lastName
year
major
email 
skills
*/

const mentor1 = {
  firstName: "Anusha",
  lastName: "Arora",
  year: 2,
  major: "CS/business",
  email: "test@test.com",
  skills: ["java", "sql"],
  work: ["product management", "finance"],
}

const mentor2 = {
  firstName: "Katie",
  lastName: "Busemeyer",
  year: 5,
  major: "CS/cognitive psychology",
  email: "test@test.com",
  skills: ["java", "react", "javascript"],
}
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

const TitleContainer = styled.h1`
  font-size: 96px;
  color: white;

  padding: 0px 20px;
`

const MajorContainer = props => {
  return (
    <div>
      <TitleContainer>
        <div>Our Mentors</div>
      </TitleContainer>
      <SearchContainer>
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
      </SearchContainer>
      <MentorsContainer>
        <Mentor {...mentor1} />
        <Mentor {...mentor2} />
        <Mentor {...mentor2} />
        <Mentor {...mentor2} />
        <Mentor {...mentor2} />
        <Mentor {...mentor2} />
        <ContactContainer>
          <ContactBox />
        </ContactContainer>
      </MentorsContainer>
    </div>
  )
}

export default MajorContainer
