import {spawn} from 'child_process'
export class ProcessExecutor{
  // constructor(cmd, script, args){
  //   this.process = spawn( cmd, [script, ...args])
  //   this.process.stdout.on('data', this.data)
  // }
  static run( cmd, script, args){
    return new Promise((res, rej) => {
      try{
        this.process = spawn(cmd, [script,...args])

      }catch(err){
        console.log(err)
        throw err
      }
      this.data = ''
      this.process.stdout.on('data', (data) => {
        this.data+=data.toString()
      })
      this.process.stderr.on('data', (err)=>{
        rej(err.toString())
      })
      this.process.on('exit', () => {
        res(this.data.toString())
      })
    })
  }
}

