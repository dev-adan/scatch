const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./config/mongoose-connection');
const expressSession = require('express-session');
const flash = require('connect-flash');
const dotenv = require('dotenv');
dotenv.config();

const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter'); 

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET
}))
app.use(flash());

// Routes
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);



app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT || 3000);
});

