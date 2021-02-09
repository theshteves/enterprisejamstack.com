import Layout from 'layouts'
import Hero from 'components/hero'
import SubscribeForm from 'components/forms/subscribe'
import Bio from 'components/bio'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="min-h-screen flex flex-row items-center justify-center relative">
        <SubscribeForm />
      </section>
      <Bio />
    </Layout>
  )
}
