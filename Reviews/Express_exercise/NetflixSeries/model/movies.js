// dbname:series
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const MovieScheme = new Schema({
    id:{
        type :Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    genre:{
        type: Array,
        required: true,
    },
    cast:{
        actor:{
            type:String,
            required:false
        },
        actress:{
            type:String,
            required:false
        },
        crew:{
            type:String,
            required:false
        }
    },
    director:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("movie",MovieScheme);