import React from 'react'
import loader from "/giphy.gif"

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
      <img src={loader} alt="" />
    </div>
  )
}

export default Loading
