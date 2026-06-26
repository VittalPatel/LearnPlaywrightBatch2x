import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Login to the hospital system
 *     responses:
 *       200:
 *         description: Login success
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const token = jwt.sign({ sub: email, role: 'super_admin' }, process.env.JWT_SECRET || 'dev-secret', {
    expiresIn: '8h'
  });

  return res.json({ token, user: { email, role: 'super_admin' }, passwordHash: hashedPassword });
});

export default router;
