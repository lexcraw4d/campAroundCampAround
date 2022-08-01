const express = require('express');
const app = express();
const connectDB = require('./config/connection');
const PORT = process.env.PORT || 3001;
// const cors = require('cors');
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(cors())

app.get('/', (req, res) => {
    res.render('index')
})
app.use(require('./routes'));

app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`)
})