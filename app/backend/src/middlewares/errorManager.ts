import { ErrorRequestHandler } from 'express';

const errorManager: ErrorRequestHandler = (error, _req, res, _next) => {
  const { name, statusCode, message } = error;
  if (name === 'AppError') {
    return res.status(statusCode).json({ message });
  }
  return res.status(500).json({ message: 'Something went wrong' });
};

export default errorManager;
