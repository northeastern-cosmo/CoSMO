import styled from "styled-components"
import React from "react"

const SectionContainerBase = styled.div`
  width: 100%;
  min-height: 900px;
  max-width: 1600px;
  margin: auto;
  z-index: 3;
  position: relative;
`

const SectionContainer = ({ children }) => {
  return (
    <SectionContainerBase className="content-wrap">
      {children}
    </SectionContainerBase>
  )
}
export default SectionContainer
