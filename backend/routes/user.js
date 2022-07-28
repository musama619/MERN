const express = require('express')
const router = express.Router();

//GET all users
router.get('/', (req, res) => {
  res.json({ msg: "ALL USERS" });
});

//GET a single user
router.get('/:id', (req, res) => {
  res.json({ msg: "GET A SINGLE USER" });
});

//POST a new user
router.post('/', (req, res) => {
  res.json({ msg: "POST A NEW USER" });
});

//PUT a new user
router.patch('/:id', (req, res) => {
  res.json({ msg: "UPDATE A USER" });
});

//DELETE a user
router.delete('/:id', (req, res) => {
  res.json({ msg: "DELETE A USER" });
});

module.exports = router
