import dbConnect from '../../lib/dbConnect'
import Levelling from '../../models/Levelling'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const lvl = await Levelling.findById(id)
        if (!lvl) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: lvl })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
