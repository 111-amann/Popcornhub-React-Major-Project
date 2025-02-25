import React from 'react'
import Notfound from "/Notfound.gif"

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
      <img src={Notfound} alt="" />
    </div>
  )
}

export default Loading
