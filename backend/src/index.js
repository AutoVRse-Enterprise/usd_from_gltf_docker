import express from 'express'
console.log("hello worldddddddddddddd")
let app = express()
let PORT = process.env.PORT;

app.get('/',(req,res) => res.json('hello world'))
app.listen(PORT || 5000, () => console.log("running on port ", PORT || 5000));
