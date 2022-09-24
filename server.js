const express = require('express');
const app = express();
const connectDB = require('./config/connection');
const PORT = process.env.PORT || 3001;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const passport = require('passport');
const morgan = require('morgan');
const MongoStore = require('connect-mongo');
// const { ensureAuth, ensureGuest } = require('./middleware/auth');
// const cors = require('cors');
const session = require('express-session');
const { localStrat, googleStrat } = require('./config/passport');
// const { ensureAuth } = require('./middleware/auth');
// const cookieParser = require('cookie-parser');

require('dotenv').config();
//Load passport config

connectDB()
localStrat(passport)
googleStrat(passport)

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

//Logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


app.use(expressLayouts);
app.set('view engine', 'ejs')

//Session Middleware
app.use(
  session({
  secret: 'acorn developer',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
      mongoUrl: process.env.DB_STRING
  })
  })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Global variables
app.use( (req, res, next) => {
  res.locals.user = req.user || null;
  next();
} );

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(cors())

app.use(require('./routes'));

app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`)
})