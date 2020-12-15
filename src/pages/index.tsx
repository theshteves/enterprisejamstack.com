import {jsx} from '@emotion/core'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js, TypeScript, Tailwind, Jest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:py-40 py-32 px-8 max-w-screen-md mx-auto min-h-screen flex flex-col items-center justify-center">
        <div className="prose relative z-10 px-5 hide-toc">
          <h1 className="text-3xl">
            Fast Effective Teams using Modern JAMStack🥞
          </h1>
        </div>
        <div className="bg-cool-gray-50 h-screen absolute z-0 top-0 w-full">
          <div className="relative overflow-hidden w-full min-h-screen">
            {/* <Background className="absolute left-0 top-0 w-screen h-screen overflow-hidden z-20" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
