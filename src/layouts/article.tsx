import * as React from 'react'
import Image from 'next/image'
import Layout from './index'
import Header from 'components/header'
import Markdown from 'react-markdown'
import removeMarkdown from 'remove-markdown'

const ArticleLayout = ({meta, children}: any) => {
  const {
    image: {url: imageUrl, alt: imageAlt},
    title,
    description,
  } = meta || {}

  return (
    <Layout
      header={<Header />}
      meta={{
        title: removeMarkdown(title),
        description: removeMarkdown(description),
        images: [{url: imageUrl, alt: imageAlt}],
      }}
    >
      <article className="max-w-screen-lg mx-auto space-y-8 py-40">
        <h1 className="pt-16 max-w-screen-lg mx-auto sm:text-7xl text-2xl font-bold text-center">
          <Markdown
            className=""
            source={title}
            disallowedTypes={['paragraph']}
            unwrapDisallowed
          />
        </h1>
        {imageUrl && (
          <header>
            <Image
              src={imageUrl}
              width={1280}
              height={720 / 1.5}
              alt={imageAlt || ''}
            />
          </header>
        )}

        <main className="prose lg:prose-xl sm:prose-lg max-w-screen-md mx-auto">
          {children}
        </main>
        {/* TODO: add share section */}
        {/* <footer>share this article with your friends!</footer> */}
      </article>
    </Layout>
  )
}

export default ArticleLayout
