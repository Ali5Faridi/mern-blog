import express from 'express';
import cors from 'cors';
import mongoose, { Mongoose } from 'mongoose';
import User from './models/User.js';
import dotenv from 'dotenv';


const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_CONNECTION);

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try{
  const userDoc = await User.create({username, password});
  res.send(userDoc);
    } catch (error){
        res.status(400).json(error);
    }
});


app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});

