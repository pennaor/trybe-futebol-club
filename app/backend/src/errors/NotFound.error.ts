export default class NotFound extends Error {
  public statusCode: number;
  public originalError?: unknown;

  constructor(message: string, originalError?: unknown) {
    super(message);
    this.name = 'AppError';
    this.statusCode = 404;
    this.originalError = originalError;
  }
}
