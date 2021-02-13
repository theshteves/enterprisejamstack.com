import * as React from 'react'
import Image from 'next/image'

const Bio = () => {
  return (
    <section className="max-w-screen-lg rounded-xl mx-auto md:bg-gray-900 flex items-center md:flex-row flex-col group">
      <img
        className="flex-shrink-0 flex md:self-end sm:w-96 w-56"
        src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1612812906/jamstackwithjason.com/jason_2x.png"
        width={'100%'}
        height={'100%'}
        alt="Jason dropping Jamstack knowledge"
      />
      <div className="sm:p-16 p-8 rounded-xl bg-gray-900 sm:mx-0 mx-5 space-y-5 sm:text-xl text-base text-gray-100 group-hover:text-white leading-relaxed transition-colors ease-in-out duration-300">
        <p>
          Jason Lengstorf is a principal developer experience engineer at
          Netlify and the host of Learn With Jason, a live-streamed video show
          where he pairs with people in the community to learn something new in
          90 minutes.
        </p>
        <p>
          He’s passionate about building healthy, efficient teams and systems,
          and he’s done his best to positively influence the community,
          leadership, and technical health of open source and companies
          including Gatsby and IBM. He lives in Portland, Oregon.
        </p>
      </div>
    </section>
  )
}

export default Bio
