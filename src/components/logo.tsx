import * as React from 'react'
import Link from 'next/link'

type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = ({className = 'text-center '}) => {
  return (
    <Link href={'/'}>
      <a className={`${className} group`}>
        <h1 className="sm:text-4xl text-2xl font-bold leading-none">
          Enterprise Jamstack
        </h1>
        <h2 className="text-brand-yellow group-hover:text-brand-yellow font-funky sm:text-2xl text-xl leading-none sm:-mt-px mt-1 transition-all ease-in-out duration-150">
          with Jason Lengstorf
        </h2>
      </a>
    </Link>
  )
}

export default Logo
