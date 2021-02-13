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
        <h1 className="sm:text-4xl text-2xl font-bold leading-none">
          Enterprise Jamstack
        </h1>
        <h2 className="text-brand-yellow group-hover:text-brand-yellow font-funky sm:text-2xl text-xl font-bold leading-none sm:-mt-px mt-1 transition-all ease-in-out duration-150">
          with Jason Lengstorf
        </h2>
      </a>
    </Link>
  )
}

export default Header
