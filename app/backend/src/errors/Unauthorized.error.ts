export default class Unauthorized extends Error {
  public statusCode: number;
  public originalError?: unknown;

  constructor(message: string, originalError?: unknown) {
    super(message);
    this.name = 'AppError';
    this.statusCode = 401;
    this.originalError = originalError;
  }
}
