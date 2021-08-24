import React from "react"
import styled from "styled-components"

import { LogoContainer } from "../header-footer/header"
import { icons } from "./icons/index"
import { Layout } from "../header-footer/footer"

const WIDTH_HEIGHT = "45"

const Link = styled.a`
  display: inline-flex;3
`

const IconContainer = styled.div`
  display: flex;
`

const SocialMedia = ({ children, direction = "" }) => {
  return (
    <Layout direction={direction}>
      {children}
      <IconContainer>

        <Link href="https://neu.campuslabs.com/engage/organization/computer-science-mentoring-organization">
          <LogoContainer
            src={icons.engage}
            width={WIDTH_HEIGHT}
            height={WIDTH_HEIGHT}
            alt="link to cosmo's engage page through northeastern"
          />
        </Link>
        <Link href="https://www.facebook.com/nuCoSMO">
          <LogoContainer
            src={icons.facebook}
            width={WIDTH_HEIGHT}
            height={WIDTH_HEIGHT}
            alt="link to facebook page"
          />
        </Link>
        <Link href="https://www.instagram.com/nu.cosmo/">
          <LogoContainer
            src={icons.insta}
            width={WIDTH_HEIGHT}
            height={WIDTH_HEIGHT}
            alt="link to instagram"
          />
        </Link>
        <Link href="https://nucosmo.slack.com/join/signup#/">
          <LogoContainer
            src={icons.slack}
            width={WIDTH_HEIGHT}
            height={WIDTH_HEIGHT}
            alt="link to slack signup form"
          />
        </Link>
        <Link href="https://github.com/northeastern-cosmo">
          <LogoContainer
            src={icons.github}
            width={WIDTH_HEIGHT}
            height={WIDTH_HEIGHT}
            alt="link to cosmo's github"
          />
        </Link>
      <Link href="https://www.linkedin.com/company/neu-cosmo/">
        <LogoContainer
            src={icons.linkedin}
            width={WIDTH_HEIGHT}
            height={WIDTH_HEIGHT}
            alt="link to cosmo's linkedin"
        />
      </Link>
        <Link href="https://anchor.fm/nu-cosmo">
          <LogoContainer
            src={icons.podcast}
            width={WIDTH_HEIGHT}
            height={WIDTH_HEIGHT}
            alt="link to cosmo's email sign up form"
          />
        </Link>
        <Link href="http://eepurl.com/hbtxdz">
          <LogoContainer
            src={icons.email}
            width={WIDTH_HEIGHT}
            height={WIDTH_HEIGHT}
            alt="link to cosmo's email sign up form"
          />
        </Link>
      </IconContainer>
    </Layout>
  )
}

export default SocialMedia
