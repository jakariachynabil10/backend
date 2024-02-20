import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from '../routes'

const app: Application = express()

app.use(express.json())


app.use(cors())

app.use('/api', router)


const getAController = (req: Request, res: Response) => {
  res.send('Welcome To SWOO')
}

app.get('/', getAController)

export default app
