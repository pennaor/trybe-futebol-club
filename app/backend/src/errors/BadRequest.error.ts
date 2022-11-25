export default class BadRequest extends Error {
  public statusCode: number;
  public originalError?: unknown;

  constructor(message: string, originalError?: unknown) {
    super(message);
    this.name = 'AppError';
    this.statusCode = 400;
    this.originalError = originalError;
  }
}
