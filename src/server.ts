import express from 'express'
import fileupload, { UploadedFile } from 'express-fileupload'
import path from 'path'
import File from './models/fileModel'
import connectDB from './db/connect'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(fileupload({
  limits: {
    fileSize: 1024 * 1024 * 2 // 2 MB
  },
  abortOnLimit: true
}))

//MongoDB database
connectDB()

// Routes: test route
app.get('/', (req, res) => {
  res.send('Welcome to image api')
})

//get all images
app.get('/', (req, res) => {
  File.find({}, (err, results) => {
    if (err) {
      res.send(`error: ${err}`)
    } else {
      console.log('I got the images')
      const files = results.map(result => {
        const base64Img = result.imgData.toString('base64')
        return base64Img
      })
      // res.json(files)
      // res.send('I got the images')

      res.render('index', { files: files })
    }
  })
})

//upload an image
app.post('/upload', async (req, res) => {  
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No file was uploaded.')
    return
  }

  const file = req.files.file as UploadedFile
  const fileName = file.name
  const fileSize = file.size
  const imgData = file.data
  const imgWidth = req.body.width
  const imgHeight = req.body.height
  const imgDesc = 'Image description'

  const extensionName = path.extname(file.name); // fetch the file extension
  const allowedExtension = ['.png','.jpg','.jpeg']

  if(!allowedExtension.includes(extensionName)){
    return res.status(422).send("Invalid Image")
  }

  try {
    const image = await File.create({ fileName, fileSize, imgWidth, imgHeight, imgDesc, imgData })
    // console.log(file)
    return res.status(200).json({ 
      msg: 'File uploaded successfuly',
      data: { fileName, fileSize, imgWidth, imgHeight, imgDesc }
    })
  } 
  catch (error) {
    return res.status(500).json({ msg: 'database error' })
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in on port ${PORT}`))