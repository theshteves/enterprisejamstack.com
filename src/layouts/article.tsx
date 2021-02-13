import * as React from 'react'
import Image from 'next/image'
import Layout from './index'
import Header from 'components/header'
import Markdown from 'react-markdown'
import removeMarkdown from 'remove-markdown'

const ArticleLayout = ({meta, children}: any) => {
  const {
    image: {url: coverImageUrl, alt: coverImageAlt},
    ogImage,
    title,
    description,
  } = meta || {}

  return (
    <Layout
      header={<Header />}
      meta={{
        title: removeMarkdown(title),
        description: removeMarkdown(description),
        ogImage,
      }}
    >
      <article className="max-w-screen-lg mx-auto space-y-8 sm:py-40 py-24">
        <h1 className="sm:pt-16 pt-14 max-w-screen-lg mx-auto lg:text-7xl sm:text-6xl text-4xl font-bold text-center lg:px-5 px-0">
          <Markdown
            source={title}
            disallowedTypes={['paragraph']}
            unwrapDisallowed
          />
        </h1>
        {coverImageUrl && (
          <header>
            <Image
              src={coverImageUrl}
              width={1280}
              height={720 / 1.5}
              layout="responsive"
              quality={100}
              alt={coverImageAlt || ''}
            />
          </header>
        )}

        <main className="prose lg:prose-xl sm:prose-lg max-w-screen-md mx-auto px-5">
          {children}
        </main>
        {/* TODO: add share section */}
        {/* <footer>share this article with your friends!</footer> */}
      </article>
    </Layout>
  )
}

export default ArticleLayout
