import {jsx} from '@emotion/core'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js, TypeScript, Tailwind, Jest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl">Fast Effective Teams using Modern JAMStack🥞</h1>
    </div>
  )
}
