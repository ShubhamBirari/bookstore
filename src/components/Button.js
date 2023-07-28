import React from 'react'

const Button = (props) => {
  return (
    <>
      <button
        {...props}
        className={`flex items-center justify-center text-black text-base font-medium ${
          props.className
        } ${props.disabled ? 'disabled:opacity-70' : ''}`}
      >
        {props.label}
      </button>
    </>
  )
}

export default Button
