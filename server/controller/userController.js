import User from '../model/userModel.js'


export const create = async(req,res)=> {
    try {
        const userData = new User(req.body);
        if(!userData) {
            return res.status(404).json({msg: "user data not found"});
        }

          const savedData = await userData.save();
            res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({error:error});
    }
}



export const getAll = async(req,res) => {
    try {
        const userData = await User.find();
        if(!userData) {
            return res.status(404).json({msg:"user data is not found"});
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({error:error});
    }
}