import * as React from 'react'
import Logo from 'components/logo'

type HeaderProps = {
  className?: string
  logo?: React.ReactElement
}

const Header: React.FC<HeaderProps> = ({
  className = 'z-10 px-5 py-8 flex items-center justify-center w-full absolute left-0 top-0',
  logo = <Logo />,
}) => {
  return <header className={className}>{logo}</header>
}

export default Header
