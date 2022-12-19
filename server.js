const express = require('express');
const cors = require('cors');
const path = require('path');
const connectToDB = require('./db');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');


const adsRoutes = require('./routes/ads.routes');
const authRoutes = require('./routes/auth.routes');


const app = express();

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'xyz567',
  resave: false, 
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/NoticeBoard',
  })
}));

connectToDB();


app.use('/api', adsRoutes);
app.use('/auth', authRoutes);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
//   });
  
app.use((req, res) => {
res.status(404).send({ message: 'Not found...' });
});







  


