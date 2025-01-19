import express, { request } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();


app.use(cors());
app.use(express.json());

 mongoose.connect('mongodb+srv://alifaridi:B2DKdlqLGYLfYaFP@cluster0.sqx1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    
    res.json({requestData: { username, password }});
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});


// B2DKdlqLGYLfYaFP
// mongodb+srv://alifaridi:B2DKdlqLGYLfYaFP@cluster0.sqx1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
