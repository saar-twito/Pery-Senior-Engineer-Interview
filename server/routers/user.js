import { Router } from 'express';
import { users } from '../utils/user.js';
const router = Router();

// POST endpoint to create a user with a preferred language
router.post('/user', (req, res) => {
  const { userName, language } = req.body;

  if (!userName || !language) {
    return res.status(400).json({ error: 'Missing userName or language.' });
  }

  const token = Math.random().toString(36).substring(2);
  users[token] = { userName, language };
  res.json({ token });
});

export default router;
