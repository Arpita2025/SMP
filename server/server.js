const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;



const userRoute =require('./routes/userRoute');
app.use('/api/users',userRoute);
app.listen(port, () => console.log(`Node/Express JS Server started on port ${port}`));
