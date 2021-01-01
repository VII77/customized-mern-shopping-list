const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

/**
 * @route   GET api/users
 * @desc    Get all users
 * @access  Private
 */

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error('No users exist');
    res.json(users);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.patch('/:id', (req, res) => {
  const _id = req.params.id
  const { role } = req.body;
  User.findOneAndUpdate({_id}, { $set: {role: role} }, { upsert: true, new: true }, (err, user) => {
    if(!user) return res.status(400).json({ msg: 'Update failed' });

    res.json({
        _id: user._id,
        name: user.name,
        email: user.email, 
        role: user.role
      }
    );
  });
});

module.exports = router;
