const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig =require('./config/dbConfig');
app.use(express.json());
const port = process.env.PORT || 5000;



 const userRoute =require('./routes/usersRoute');
 const productsRoute= require('./routes/productsRoute');
app.use('/api/users',userRoute);
app.use('/api/products',productsRoute);
app.listen(port, () => console.log(`Node/Express JS Server started on port ${port}`));
