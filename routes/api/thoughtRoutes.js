const router = require('express').Router();

const {
//   getThoughts,
//   getSingleThought,
  createThought,
//   updateThought,
//   deleteThought,
//   addReaction,
//   deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/Thoughts
// router.route('/').get(getThoughts);
router.route('/').post(createThought);

// /api/Thoughts/:thoughtId
// router
//   .route('/:thoughtId')
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

// /api/Thoughts/:thoughtId/reactions
// router.route('/:thoughtId/reactions').post(addReaction);

// /api/Thoughts/:thoughtId/reactions/:reactionId
// router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
