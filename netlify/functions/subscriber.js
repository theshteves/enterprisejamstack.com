const fetch = require('node-fetch')
const cookie = require('cookie')

const CK_BASE_URL = 'https://api.convertkit.com/v3'
const CK_FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_SIGNUP_FORM

exports.handler = async (event) => {
  const {ck_subscriber_id} = cookie.parse(event.headers.cookie)
  console.log({ck_subscriber_id})

  const response = await fetch(
    CK_BASE_URL +
      `/subscribers/${ck_subscriber_id}?api_secret=${process.env.CONVERTKIT_API_SECRET}`,
  ).then((res) => res.json())

  // if (!response.ok) {
  //   console.log(response)
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({error: 'something went wrong'}),
  //   }
  // }

  // const data = await response.json()

  // const subCookie = cookie.serialize(
  //   'ck_subscriber_id',
  //   data.subscription.subscriber.id,
  //   {
  //     secure: process.env.NODE_ENV === 'production',
  //     httpOnly: true,
  //     path: '/',
  //     maxAge: 3600000 * 24 * 365, // one year
  //   },
  // )

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  }
}
