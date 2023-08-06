import express from 'express'; //framework to create api
import cors from 'cors'; //set up rules to communicate between front and back
import mongoose from 'mongoose'; //speak to mongodb


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect( 'mongodb+srv://leofengg02:Yutwimlar68MJh6r@cluster0.9my7rzx.mongodb.net/?retryWrites=true&w=majority' );

app.listen(5000, () => console.log('SERVER STARTED')); 
