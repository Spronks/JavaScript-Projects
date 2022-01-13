const express = require('express');
const router = express.Router();
const members = require('../../Members');

// Gets all members
router.get('/', (req, res) => {
  res.json(members);
});

// Get Single Member
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id == req.params.id)

  if(found) {   
      res.json(members.filter(member => member.id == req.params.id));
  } else {
      res.status(400).json({ msg: `No Member with the id of ${req.params.id}`})
  }
})

// Create Member
// router.post()

module.exports = router;