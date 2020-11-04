import { config } from 'dotenv'
config()

//libs imports
import { createRoles } from './libs/initialSetUp'

//routes imports
import authRoutes from './routes/auth.routes'

import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import http from 'http'

const app: Application = express()
const server = http.createServer(app)

app.set('PORT', process.env.PORT || 4000)

//config
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//libs
createRoles()

//routes
app.use('/api/auth', authRoutes)

export { app, server }
