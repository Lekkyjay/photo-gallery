import express from 'express'
import { UploadedFile } from 'express-fileupload'
import path from 'path'
import File from '../models/fileModel'

const router = express.Router()

// test route
router.get('/test', (req, res) => {
  res.send('Welcome to image api')
})

//get all images
router.get('/', async (req, res) => {
  try {
    const results = await File.find({})
    // const imgs: string[] = results.map(result => result.imgData.toString('base64'))
    return res.json(results)
  } 
  catch (error) {
    res.send(`error: ${error}`)
  }  
})

//upload an image
router.post('/upload', async (req, res) => {  
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No file was uploaded.')
    return
  }

  const file = req.files.file as UploadedFile
  const fileName = file.name
  const fileSize = file.size
  const imgData = file.data
  // const imgWidth = req.body.width
  // const imgHeight = req.body.height
  const imgWidth = '250'
  const imgHeight = '250'
  const imgDesc = 'Image description'

  const extensionName = path.extname(file.name); // fetch the file extension
  const allowedExtension = ['.png', '.PNG','.jpg','.jpeg']

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

export default router