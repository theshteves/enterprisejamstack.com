import React, {FunctionComponent} from 'react'
import {NextSeo} from 'next-seo'
import Header from 'components/header'
import Footer from 'components/footer'

type LayoutProps = {
  meta?: any
  noFooter?: boolean
}

const DefaultLayout: FunctionComponent<LayoutProps> = ({
  children,
  meta,
  noFooter = false,
}) => {
  const {title, description, titleAppendSiteName = false, url, ogImage} =
    meta || {}
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleAppendSiteName ? undefined : '%s'}
        openGraph={{
          title,
          description,
          url,
          images: ogImage ? [ogImage] : undefined,
        }}
        canonical={url}
      />
      <Header />
      {children}
      {!noFooter && <Footer />}
    </>
  )
}

export default DefaultLayout
