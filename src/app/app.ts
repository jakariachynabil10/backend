import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from '../routes'
import globalErrorHandler from './middleware/globalErrorHandler'
import notFound from './middleware/notFound'

const app: Application = express()

app.use(express.json())


app.use(cors())

app.use('/api', router)


const getAController = (req: Request, res: Response) => {
  res.send('Welcome To SWOO')
}

app.use(globalErrorHandler);


app.get('/', getAController)


app.use(notFound)

export default app
