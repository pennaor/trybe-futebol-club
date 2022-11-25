export default class UnprocessableEntity extends Error {
  public statusCode: number;
  public originalError?: unknown;

  constructor(message: string, originalError?: unknown) {
    super(message);
    this.name = 'AppError';
    this.statusCode = 422;
    this.originalError = originalError;
  }
}
