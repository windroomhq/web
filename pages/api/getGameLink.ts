// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await (await axios.get("https://api.github.com/orgs/windroomhq")).data
  const url = data.blog
  res.status(200).json({ url: url })
}
