const fetch = require('node-fetch')
const cookie = require('cookie')

const CK_BASE_URL = 'https://api.convertkit.com/v3'
const CK_FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_SIGNUP_FORM

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 404,
      body: 'not found',
    }
  }

  const {first_name, email} = JSON.parse(event.body)

  const response = await fetch(CK_BASE_URL + `/forms/${CK_FORM_ID}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name,
      email,
      api_key: process.env.CONVERTKIT_API_PUBLIC,
    }),
  }).catch((error) => {
    console.error(error)
  })

  if (!response.ok) {
    console.log(response)
    return {
      statusCode: 200,
      body: JSON.stringify({error: 'something went wrong'}),
    }
  }

  const data = await response.json()

  const subCookie = cookie.serialize(
    'ck_subscriber_id',
    data.subscription.subscriber.id,
    {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      path: '/',
      maxAge: 3600000 * 24 * 365, // one year
    },
  )

  return {
    statusCode: 200,
    headers: {
      'Set-Cookie': subCookie,
    },
    body: JSON.stringify(data),
  }
}
