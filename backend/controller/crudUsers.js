import user from '../model/model.js'

const User = user.users;

export const fetchUsers = async(req, res) => {
    try {
        const users = await User.find();
        if(users.length === 0) return res.status(404).json({
            message:"Users not found! - backend"
        })
        res.status(200).json({
            message:"Users fetch successfully! - backend",
            users
        })
    } catch (error) {
        res.status(400).json({
            message:"Bad request - backend"
        })
    }
}
