import * as React from 'react'

const SubscribeForm = () => {
  return (
    <div className="py-16 px-5 relative ">
      <h3 className="lg:text-5xl text-4xl font-bold text-center pb-2">
        Unlock the full potential of scalable & production ready Jamstack Architecure for Your Team
      </h3>
      <h4 className="sm:text-4xl text-3xl text-brand-yellow font-funky text-center sm:pb-16 pb-10">
        be the first to hear about updates to this course
      </h4>
      <form
        className="mx-auto max-w-md grid grid-cols-1 gap-8 w-full bg-gray-1000 p-5"
        action={`https://app.convertkit.com/forms/${process.env.NEXT_PUBLIC_CONVERTKIT_SIGNUP_FORM}/subscriptions`}
        method="post"
      >
        <div className="flex flex-col">
          <label htmlFor="fields[first_name]">First name</label>
          <input
            className="px-4 text-lg py-3 form-input bg-gray-800 border-none focus:ring-2 focus:ring-offset-transparent focus:ring-brand-yellow"
            id="fields[first_name]"
            name="fields[first_name]"
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
          className="group flex items-center justify-center font-bold text-center py-4 text-lg px-4 bg-gradient-to-r from-brand-purple to-brand-red text-white"
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
