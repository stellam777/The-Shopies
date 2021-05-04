import React from 'react'
import {GoStar} from 'react-icons/go'

const Banner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center banner">
      <GoStar size={30} />
      <GoStar size={30} />
      <GoStar size={30} />
      <h2>5 Movies Nominated!</h2>
      <GoStar size={30} />
      <GoStar size={30} />
      <GoStar size={30} />
    </div>
  )
}

export default Banner
