import React from 'react'

const Image = (props) => {
  return (
    <>
      <img loading="lazy" {...props} />
    </>
  )
}

export default Image
