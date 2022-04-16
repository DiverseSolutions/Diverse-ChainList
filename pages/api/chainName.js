import Cors from 'cors'
import { chainlist } from '../../constants';

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req, res) {
  await runMiddleware(req, res, cors)
  const { chainName } = req.query

  let foundNetwork = chainlist.find((i) => {
    let foundName = i.name.find((item) => item == chainName)

    if(foundName == undefined){
      return undefined
    }

    return foundName;
  })

  if(chainName == undefined){
    res.status(400).json({ error: 'chainName query parameter not found' })
  }

  if(foundNetwork == undefined){
    res.status(400).json({ error: 'network not found' })
  }

  res.status(200).json(foundNetwork)
}

export default handler;
