var mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true
    },
    album:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }


},{
    versionKey: false 
});


const Song = mongoose.model('songlist',SongSchema);

Song.get = async function() {
    try {
        const songs = await Song.find();
        return songs;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = Song;