import { ErrorRequestHandler } from 'express';

const errorManager: ErrorRequestHandler = (error, _req, res, _next) => {
  console.error(error);

  const { name, statusCode, message } = error;
  if (name === 'AppError') {
    res.status(statusCode).json({ message });
    return;
  }

  res.status(500).json({ message: 'Something went wrong' });
};

export default errorManager;
