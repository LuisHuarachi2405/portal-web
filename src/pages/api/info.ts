import { NextApiRequest, NextApiResponse } from 'next'

export default function InfoHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ip: req.socket.remoteAddress })
}
