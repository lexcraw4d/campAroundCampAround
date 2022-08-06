const express = require('express');
const app = express();
const connectDB = require('./config/connection');
const PORT = process.env.PORT || 3001;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
// const cors = require('cors');
connectDB()
app.use(expressLayouts);
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(cors())

app.use(require('./routes'));

app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`)
})