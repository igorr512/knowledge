
const Procedure = require('../models/procedureModel');

exports.addProcedure = async(req,res) =>{
    const {title,content,tags} = req.body;
    try{
        const newProcedure = new Procedure({title,content,tags});
        await newProcedure.save();
        res.status(201).json(newProcedure);
    }catch (err){
        res.status(500).json({error:err.message});
    }
};