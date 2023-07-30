import React from 'react'

const NoResultFound = () => {
  return (
    <>
      <div className="bg-white p-8 w-full justify-center">
        <p className="font-medium text-3xl mb-4">Sorry, no results found!</p>
        <p className="text-gray-600 text-xl">
          Please check the spelling or try searching for something else
        </p>
      </div>
    </>
  )
}

export default NoResultFound
