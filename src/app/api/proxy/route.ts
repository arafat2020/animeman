import { NextApiRequest, NextApiResponse } from 'next';

export  async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { src, referer } = req.query;

  src = typeof src === 'string' ? src : src?.join('');
  referer = typeof referer === 'string' ? referer : referer?.join(' ');
console.log(src,referer);

  const options = {
    headers: {
      Referer: referer,
    },
  };

  // fetch the data from the url
  if (src) {
    const response = await  fetch(src, options as RequestInit)

  const setHeader = (header: string) => {
    { /* @ts-ignore */}
    res.setHeader(header, response.headers.get(header.toLowerCase()));
  };

  // set etag, and expires header so that the browser caches the video data
  await setHeader('etag');
  await setHeader('expires');

  // send the response data back to the client
  res.send(response.body);
  }else {
    res.status(400)
  }
  
}