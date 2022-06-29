const User = require('../models/user');

exports.addUser = async(req,res) => {

    let {name, email, password} = req.body;

    try {

        let user = await User.findOne({email});

        if( user ) return res.status(400).json({message : "User already added"});

        let result = await User.create({name,email,password});

        return res.status(201).json({result,message : "User added successfully !!! "})

    } catch (error) {
        return res.status(500).json({message : "Something went wrong !!! "})
    }
}


exports.deleteUser = async(req,res) => {

    let {id} = req.params;

    try {

        let user = await User.findById(id);

        if ( ! user) return res.status(404).json({message : "User doesn't exist"});
        
        await User.findByIdAndRemove(id);

        return res.status(200).json({message : "User deleted successfully !!! "})

    } catch (error) {
        return res.status(500).json({message : "Something went wrong !!! "})
    }
}

