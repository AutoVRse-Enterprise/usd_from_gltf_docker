import { ProcessExecutor } from "../classes/ProcessExecutor.js"
import {promises as fs} from 'fs'
import { tmpdir } from "os"
import { response } from "express"
// export const convertUSD = (req, res) => {
//   const files = req.files?.files
//   console.log(req.files)
//   if(!files)res.json({message: "Please provide files"})
//   try{
//     console.log(files)
//     res.json('hello')
//     for( ({tempFilePath, files}) of files){
//       const response = ProcessExecutor.run('gltf_from_usd', tempFilePath, '../tmpout/')
      
//     }
//   }catch(err){

//   }
// }

export const convertUSD = async (req, res) => {
  console.log(req.files)
  const file = req.files?.files
  // if(!file) return res.json('File not avai')
  console.log(req.files)
  try{
    // file.tempFilePath
    // const response = await ProcessExecutor.run('usd_from_gltf', file.tempFilePath, ['./asd.usdz'])
    const fileDir = '../tmp/'
    try{
      await fs.mkdir(fileDir, {recursive:true})
    }catch(err){}
    // try{
    //   console.log('asdasd')
    // }catch(err){
    //   console.log(err)
    // }
    let glbDir = fileDir + 'tmp.glb' 
    await fs.writeFile(fileDir+'tmp.glb', file.data)
    let usdDir = fileDir + 'tmp.usdz'
    await ProcessExecutor.run('usd_from_gltf', glbDir, [usdDir])
    const usd = await fs.readFile(usdDir)
    return res.type('model/usd').send(usd)
    // return res.json('')
  }catch(err){
    console.log(err)
    return res.json({message: err.message})
  }
}

