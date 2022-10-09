console.log("hello worldddddddddddddd")
import express from 'express'
app = express()
PORT = process.env.PORT;
app.listen(PORT || 5000, () => console.log("running on port ", PORT || 5000));
