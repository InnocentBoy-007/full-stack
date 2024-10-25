import user from '../model/model.js'
import bcrypt from 'bcrypt'

const Users = user.users;

export const userSignUp = async(req,res) => {

    const {username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    if(!username || !email || !password) {
        return res.status(400).json({
            error:"All fields required! - backend"
        });
    }
    try {
        const response = await new Users({
            username:username,
            email:email,
            password:hashedPassword
        }).save();
        res.status(201).json({
            message:"User created in the database - backend",
            response
        })
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}

export const userSignIn = async(req, res) => {
    const {username, password} = req.body;
    try {
        const user = await Users.findOne({username:username});
        if(!user) return res.status(404).json({
            message:"User not found! - backend"
        })
        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword) return res.status(400).json({
            message:"Wrong password! - backend"
        })
        res.status(200).json({
            message:"Sign in successfully! - backend",
            userInfo:user.username
        })
    } catch (error) {
        res.status(500).json({
            error:"Internal server error!"
        })
    }
}
