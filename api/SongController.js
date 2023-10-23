const Song = require('./songs');
exports.index = async function(req, res) {
    try {
        const songs = await Song.find();
        res.json({
            status: "success",
            message: "Got songs Successfully!",
            data: songs
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

exports.add = async function(req, res) {
    try {
        const { title, artist, album, genre, year} = req.body;
        const song = new Song({
            title,
            artist,
            album,
            genre,
            year
        });

        const savedSong = await song.save();
        res.json({
            message: "New Song Added!",
            data: savedSong
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};
exports.view = async function(req, res) {
    try {
        const songId = req.params.songs_id;
        
        const song = await Song.findById(songId);
        
        if (!song) {
            return res.status(404).json({
                status: "error",
                message: "Player not found"
            });
        }
        res.json({
            message: 'Player Details',
            data: song
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};
exports.update = async (req, res) => {
    try {
        const songId = req.params.songs_id;
        const { title, artist, album, genre, year} = req.body;

        const song = await Song.findByIdAndUpdate(
            songId,
            {title,artist,album,genre,year},
            { new: true }
        );

        if (!song) {
            return res.status(404).json({
                status: "error",
                message: "Song not found"
            });
        }

        res.json({
            message: "Player Updated Successfully",
            data: song
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

exports.delete = async function(req, res) {
    try {
        const songId = req.params.songs_id;
        const song = await Song.findByIdAndDelete(songId);

        if (!song) {
            return res.status(404).json({
                status: "error",
                message: "Song not found"
            });
        }

        res.json({
            status: "success",
            message: 'Song Deleted'
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

