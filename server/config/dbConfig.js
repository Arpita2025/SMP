// // const mongoose =require('mongoose');
// // mongoose.connect(process.env.mongo_url);
// // const connection =mongoose.connection;
// // connection.on('connected',()=>{
// //     console.log('Mongo DB Connection Successful ');
// // })
// // connection.on('error',(err)=>{
// //     console.log('Mongo DB Connection Failed');
// // })
// // module.exports =connection;
// const express = require('express');
// const mongoose = require('mongoose');
// const usersRoute = require('./routes/usersRoute'); // Import usersRoute

// const app = express();
// const port = process.env.PORT || 3000;

// // ... (other middleware and configurations)

// app.use('/api/users', usersRoute); // Use the imported usersRoute

// // ... (other routes and configurations)

// mongoose.connect(process.env.mongo_url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;

// connection.on('connected', () => {
//   console.log('Mongo DB Connection Successful');
// });

// connection.on('error', (err) => {
//   console.log('Mongo DB Connection Failed');
//   console.error(err);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
