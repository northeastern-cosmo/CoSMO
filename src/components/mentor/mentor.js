import React, { useState } from "react"

const Mentor = props => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div onClick={() => setIsOpen(prevOpen => !prevOpen)}>{props.name}</div>
      {isOpen && (
        <div>
          <div>{props.year}</div>
          <div>{props.major}</div>
        </div>
      )}
    </div>
  )
}

export default Mentor
