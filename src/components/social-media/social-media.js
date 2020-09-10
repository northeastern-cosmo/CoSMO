import React from "react"
import styled from "styled-components"

import { LogoContainer } from "../header-footer/header"
import { icons } from "./icons/index"

const WIDTH_HEIGHT = "45"

const Link = styled.a`
  display: inline-flex;
`

const IconContainer = styled.div`
  position: fixed;
  right: auto;
  bottom: 10px;

  @media (max-width: 480px) {
    bottom: 0px;
    padding-right: 0px;
  }
`

const SocialMedia = () => {
  return (
    <IconContainer>
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
    </IconContainer>
  )
}

export default SocialMedia
