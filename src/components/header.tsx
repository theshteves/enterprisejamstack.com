import * as React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="z-10 px-5 py-8 flex items-center justify-center w-full absolute left-0 top-0">
      <Logo />
    </header>
  )
}

export const Logo = () => {
  return (
    <Link href={'/'}>
      <a className="text-center group">
        <div className="text-4xl font-bold leading-none">Jamstack</div>
        <div className="text-brand-yellow group-hover:text-brand-yellow font-funky text-2xl font-bold leading-none -mt-px transition-all ease-in-out duration-150">
          with Jason
        </div>
      </a>
    </Link>
  )
}

export default Header
