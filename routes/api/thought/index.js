const router = require('express').Router();
const { createThought,
    getAllThoughts,
    getThoughtById,
    addReactionToThoughtById,
    deleteReactionToThoughtById,
    updateThoughtById,
    deleteThoughtById
 } = require('../../../controllers/thoughtController');

router.route('/')
    .post(createThought)
    .get(getAllThoughts);

router.put('/:thoughtId/reactions', addReactionToThoughtById);
router.delete('/:thoughtId/reactions/:reactionId', deleteReactionToThoughtById);

router.route('/:thoughtId')
     .get(getThoughtById)
     .put(updateThoughtById)
     .delete(deleteThoughtById);

module.exports = router;