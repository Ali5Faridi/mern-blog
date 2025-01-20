import express from 'express';
import cors from 'cors';
import mongoose, { Mongoose } from 'mongoose';
import User from './models/User.js';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const salt = bcrypt.genSaltSync(10);
const secret = 'hdcksNDSL5@fsr345ccQWDyzrrthrsthsr'


const app = express();
dotenv.config();


app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

mongoose.connect(process.env.MONGO_CONNECTION);


// Register
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try{
  const userDoc = await User.create({
    username,
     password: bcrypt.hashSync(password, salt),
    });
  res.send(userDoc);
    } catch (error){
        res.status(400).json(error);
    }
});

// Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk){
    // logged in
    jwt.sign({username, id:userDoc. _id}, secret, {}, (error, token)=> {
     if (error) throw error;{
         res.cookie('token', token).json('ok');
     }
    })

    } else {
        res.status(400).json('wrong credentials');
    }
});
    

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});

