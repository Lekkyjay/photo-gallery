import express from 'express'
import fileupload from 'express-fileupload'
import connectDB from './db/connect'
import imgRoutes from './routes'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(fileupload({
  limits: {
    fileSize: 1024 * 1024 * 2 // 2 MB
  },
  abortOnLimit: true
}))

//MongoDB database
connectDB()

// Routes
app.use('/images', imgRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in on port ${PORT}`))