const express = require('express');
const app = express();
const connectDB = require('./config/connection');
const PORT = 3001

connectDB();

app.listen(process.env.PORT || PORT , () => {
  console.log(`Server is running on port ${PORT}`)
})