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

// export const pathUsers = async(req, res) => {
//     const {id} = req.params;
//     const {updates} = req.body;
//     try {
//         const user = await User.findById(id);
//         if(!user) return res.status(404).json({
//             message:"User not found! - backend"
//         })
//         Object.assign({user, updates});
//         const patchUsers = await user.save();
//         res.status(200).json({
//             message:"Profile updated successfully! - backend",
//             patchUsers
//         })
//     } catch (error) {
//         res.status(500).json({
//             message:"Internal server error! - backend",
//             error
//         })
//     }
// }
