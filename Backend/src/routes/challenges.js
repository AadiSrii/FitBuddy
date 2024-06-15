const express = require('express');
const router = express.Router();
const Challenge = require('../models/Challenge');

// GET all challenges
router.get('/', async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific challenge
router.get('/:id', getChallenge, (req, res) => {
  res.json(res.challenge);
});

// POST a new challenge
router.post('/', async (req, res) => {
  const challenge = new Challenge({
    title: req.body.title,
    description: req.body.description,
    duration: req.body.duration,
  });

  try {
    const newChallenge = await challenge.save();
    res.status(201).json(newChallenge);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH (update) a challenge
router.patch('/:id', getChallenge, async (req, res) => {
  if (req.body.title != null) {
    res.challenge.title = req.body.title;
  }
  if (req.body.description != null) {
    res.challenge.description = req.body.description;
  }
  if (req.body.duration != null) {
    res.challenge.duration = req.body.duration;
  }

  try {
    const updatedChallenge = await res.challenge.save();
    res.json(updatedChallenge);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a challenge
router.delete('/:id', getChallenge, async (req, res) => {
  try {
    await res.challenge.remove();
    res.json({ message: 'Deleted challenge' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getChallenge(req, res, next) {
  let challenge;
  try {
    challenge = await Challenge.findById(req.params.id);
    if (challenge == null) {
      return res.status(404).json({ message: 'Cannot find challenge' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.challenge = challenge;
  next();
}

module.exports = router;
