import React, {FunctionComponent} from 'react'
import {NextSeo} from 'next-seo'
import Header from 'components/header'
import Footer from 'components/footer'

type LayoutProps = {
  meta?: any
  header?: React.ReactElement
  noFooter?: boolean
}

const DefaultLayout: FunctionComponent<LayoutProps> = ({
  children,
  header = <Header />,
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
      {header}
      {children}
      {!noFooter && <Footer />}
    </>
  )
}

export default DefaultLayout
