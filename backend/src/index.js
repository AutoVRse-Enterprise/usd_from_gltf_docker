import express from 'express'
import { convertUSD } from './controllers/convertUSD.js';
import fileUpload from 'express-fileupload'

let app = express()
app.use(fileUpload({ useTempFiles: false, tempFileDir: "../tmp/" }))

app.get('/', (req,res) => res.json('hello worldddddddd'))
app.post('/', convertUSD)


let PORT = process.env.PORT;
app.listen(PORT || 4100, () => console.log("running on port ", PORT || 4100));



