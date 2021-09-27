import type { NextApiRequest } from 'next'

import Parser from 'ua-parser-js'
// https://github.com/faisalman/ua-parser-js
export default function isMobile(req?: NextApiRequest) {
  let userAgent

  if (req) {
    //SSR request is present
    userAgent = Parser(req.headers['user-agent'] || '')
  } else {
    // check only on clientside no request present
    userAgent = new Parser().getResult()
  }

  // console.log(userAgent, 'userAgent')
  return userAgent?.device?.type === 'mobile'
}
