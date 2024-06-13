import express from 'express';

import dotenv from 'dotenv';
import router from './src/routes/authRoutes.js';
import connectDB from './src/configs/db.js';

dotenv.config();

const app = express();

app.use(express.json()); // Built-in middleware for parsing JSON request bodies

app.use('/api/auth', router); 


app.get("/", (req,res)=>{
res.send("This is home route")
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
   await connectDB();
  console.log(`Server started on port ${PORT}`);
});
