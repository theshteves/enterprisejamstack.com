import * as React from 'react'
import Boxes from '../assets/boxes.svg'
import {Logo} from 'components/header'

const Footer = () => {
  return (
    <footer className="flex items-center justify-center lg:py-32 py-16">
      <div className="flex flex-col items-center justify-center space-y-2 transform scale-90">
        <Boxes />
        <Logo />
      </div>
    </footer>
  )
}

export default Footer
