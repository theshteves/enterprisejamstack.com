import * as React from 'react'
import Image from 'next/image'

const Bio = () => {
  return (
    <section className="max-w-screen-lg md:rounded-xl mx-auto md:bg-gray-900 flex items-center md:pt-8 md:flex-row flex-col">
      <div className="flex-shrink-0 flex md:self-end">
        <Image
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1612812906/jamstackwithjason.com/jason_2x.png"
          width={500 / 1.3}
          height={500 / 1.3}
        />
      </div>
      <div className="p-8 md:pb-14 prose md:prose-lg bg-gray-900">
        <h2>Lorem Ipsum Dolor</h2>
        <p>
          Faucibus ultrices quis quisque at inceptos mauris sit, aptent pharetra
          auctor lacinia torquent felis potenti vel, convallis dignissim
          himenaeos hac platea nunc.
        </p>
        <p>
          Natoque dui porttitor non placerat volutpat mollis pulvinar hendrerit
          felis, varius tempus mauris iaculis dignissim leo lectus arcu sapien,
          ultricies nisi inceptos lacinia quisque tortor sit blandit.
        </p>
      </div>
    </section>
  )
}

export default Bio
