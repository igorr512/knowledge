const mongoose = require('mongoose');

const procedureSchema = new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    tags:{type:[mongoose.Schema.Types.Mixed],required:true}
});

const Procedure = mongoose.model('Procedure',procedureSchema);

module.exports = Procedure;