const express = require('express');
const app = express();
const connectDB = require('./config/connection');
const PORT = process.env.PORT || 3001;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
// const cors = require('cors');
connectDB()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride(function(req, res){
 if (req.body && typeof req.body === 'object' && '_method' in req.body) {
   // look in urlencoded POST bodies and delete it
   let method = req.body._method;
   delete req.body._method;
   return method;
 }
}))



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