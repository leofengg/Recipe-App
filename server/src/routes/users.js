import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/Users.js';

const router = express.Router();

router.post('/register', async(req, res) => {
    //get username/pw from request
    const {username, password} = req.body;
    const user = await UserModel.findOne({username: username});

    //check if username is already in database
    if (user) {
        return res.json({message: "User already exists."});
    }

    //hash password
    const hashedPw = await bcrypt.hash(password, 10);
    const newUser = new UserModel({username, password: hashedPw});
    await newUser.save();

    res.json({message: "Sucessfully registered."});
});

router.post('/login', async(req, res) => {
    //get username/pw from request
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});

    //check if user exists 
    if (!user) {
        return res.json({message: "User doesn't exist"});
    }

    //check for password validity
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.json({messsage: "Username or password is incorrect"})
    }

    const token = jwt.sign({id: user._id}, "secret");
    res.json({token, userID: user._id});
});

export {router as userRouter};