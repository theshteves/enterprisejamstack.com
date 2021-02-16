import {useRouter} from 'next/router'
import * as React from 'react'

const SubscribeForm = () => {
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    const data = new FormData(event.target)

    await fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        first_name: data.get('first_name'),
        email: data.get('email_address'),
      }),
    }).then((res) => res.json())

    // if necessary, add analytics, etc. here

    router.push('/confirm')
  }

  return (
    <div className="py-16 px-5 relative">
      <h3 className="lg:text-5xl text-4xl font-bold text-center pb-4 max-w-screen-lg mx-auto">
        Unlock the Full Potential of{' '}
        <strong className="sm:block text-brand-yellow font-funky transform sm:scale-105">
          Scalable & Production Ready
        </strong>{' '}
        Jamstack Architecture for Your Team
      </h3>
      <h4 className="sm:text-xl text-lg text-gray-200 text-center sm:pb-16 pb-10 leading-tight sm:w-auto w-56 mx-auto">
        Be the first to hear about updates to this course
      </h4>
      <form
        className="mx-auto max-w-md grid grid-cols-1 gap-8 w-full bg-gray-1000 p-5"
        // action={`https://app.convertkit.com/forms/${process.env.NEXT_PUBLIC_CONVERTKIT_SIGNUP_FORM}/subscriptions`}
        action="/.netlify/functions/subscribe"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="first_name">First name</label>
          <input
            className="px-4 text-lg py-3 form-input bg-gray-800 border-none focus:ring-2 focus:ring-offset-transparent focus:ring-brand-yellow"
            id="first_name"
            name="first_name"
            type="text"
            placeholder="Avery"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email_address">
            Email <span className="text-gray-400">*</span>
          </label>
          <input
            className="px-4 text-lg py-3 form-input bg-gray-800 border-none focus:ring-2 focus:ring-offset-transparent focus:ring-brand-yellow"
            id="email_address"
            name="email_address"
            type="email"
            placeholder="@"
            required
          />
        </div>
        <button
          type="submit"
          className="group flex items-center justify-center font-bold text-center py-4 text-lg px-4 bg-gradient-to-r from-brand-purpleDark to-brand-redDark text-white"
        >
          <span className="group-hover:scale-105 transition-transform ease-in-out duration-300 transform">
            Get Good at Jamstack
          </span>
        </button>
      </form>
      <div className="text-sm opacity-60 text-center mt-4">
        No spam, unsubscribe any time.
      </div>
    </div>
  )
}

export default SubscribeForm
