var router = require('express').Router();
var songController = require('./SongController');
var Song = require('./songs')

router.route('/songs')
    .get(songController.index)
    .post(songController.add);
router.route('/songs/:songs_id')
    .get(songController.view)
    .patch(songController.update)
    .put(songController.update)
    .delete(songController.delete);

router.get('/:artistName', async (req, res) => {
        try {
          const artistName = req.params.artistName;
          const songs = await Song.find({ artist: artistName });
      
          if (!songs || songs.length === 0) {
            return res.status(404).json({ message: 'No songs found for this artist.' });
          }
      
          res.json(songs);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      });

module.exports=router;