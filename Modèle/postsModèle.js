const mongoose= require("mongoose");

const PostsModele= mongoose.model(

"James-api",

{

	author: {
		type:String,
		required:true
	},

	message: {
		type: String,
		required:true
	},

	date: {
		type:Date,
		default: Date.now
	}


},

"posts",
	
);

module.exports = {PostsModele};

