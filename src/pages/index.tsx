import Layout from 'layouts'
import Hero from 'components/hero'
import SubscribeForm from 'components/forms/subscribe'
import Background from 'components/hero/background'
import Bio from 'components/bio'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="min-h-screen flex flex-row items-center justify-center relative">
        <Background />
        <SubscribeForm />
      </section>
      <Bio />
    </Layout>
  )
}
