const express = require('express');
const app = express();
require('dotenv').config();

// Set up middleware before routes
app.use(express.json());

// Require the dbConfig file to set up the database connection
require('./config/dbConfig');

const port = process.env.PORT || 5000;

const userRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');
const bidsRoute = require('./routes/bidsRoute');

app.use('/api/users', userRoute);
app.use('/api/products', productsRoute);
app.use('/api/bids', bidsRoute);

 const userRoute =require('./routes/usersRoute');
 const productsRoute= require('./routes/productsRoute');
 const bidsRoute = require('./routes/bidsRoute');
app.use('/api/users',userRoute);
app.use('/api/products',productsRoute);
app.use('/api/bids',bidsRoute);
app.listen(port, () => console.log(`Node/Express JS Server started on port ${port}`));
