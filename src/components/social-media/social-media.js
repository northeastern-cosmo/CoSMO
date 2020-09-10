import React from "react"

import { LogoContainer } from "../header-footer/header"

import { icons } from "./icons/index"

const WIDTH_HEIGHT = "45"

const SocialMedia = () => {
  return (
    <div>
      <a href="https://www.facebook.com/nuCoSMO">
        <LogoContainer
          src={icons.facebook}
          width={WIDTH_HEIGHT}
          height={WIDTH_HEIGHT}
          alt="link to facebook page"
        />
      </a>
      <a href="https://www.instagram.com/nu.cosmo/">
        <LogoContainer
          src={icons.insta}
          width={WIDTH_HEIGHT}
          height={WIDTH_HEIGHT}
          alt="link to instagram"
        />
      </a>
      <a href="https://nucosmo.slack.com/join/signup#/">
        <LogoContainer
          src={icons.slack}
          width={WIDTH_HEIGHT}
          height={WIDTH_HEIGHT}
          alt="link to slack signup form"
        />
      </a>
      <a href="https://github.com/northeastern-cosmo">
        <LogoContainer
          src={icons.github}
          width={WIDTH_HEIGHT}
          height={WIDTH_HEIGHT}
          alt="link to cosmo's github"
        />
      </a>
    </div>
  )
}

export default SocialMedia
