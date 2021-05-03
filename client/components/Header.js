import React from 'react'
import logo from '../../public/shoppieslogo.png'

const Header = () => {
  return (
    <div className="p-1 header">
      <img style={{paddingLeft: '10px'}} src={logo} />
    </div>
  )
}

export default Header
