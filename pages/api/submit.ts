import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/mongodb'
import emailRecord from '../../models/emailRecord'

export type Data = {
  success: boolean
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect()
  switch (req.method) {
    case 'POST':
      try {
        const { name, email } = req.body
        await emailRecord.create({
          name,
          email,
        })
        res.status(201).json({
          success: true,
          message: 'Successfully submitted!',
        })
      } catch (error: any) {
        res.status(400).json({
          success: false,
          message: "Already subscribed!",
        })
      }
      break
    default:
      res.status(500).json({
        success: false,
        message: "Couldn't submit, please try again!",
      })
      break
  }
}
