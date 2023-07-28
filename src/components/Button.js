import React from 'react'

const Button = (props) => {
  return (
    <>
      <button
        {...props}
        className={`flex w-full items-center justify-center rounded-md bg-indigo-600 text-base font-medium ${
          props.className
        } ${props.disabled ? 'disabled:opacity-70' : ''}`}
      >
        {props.label}
      </button>
    </>
  )
}

export default Button
