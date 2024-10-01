import createHttpError from 'http-errors';
import { registerUser } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw createHttpError(
      400,
      'Missing required fields: name, email or password',
    );
  }

  const user = await registerUser({ name, email, password });

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};
