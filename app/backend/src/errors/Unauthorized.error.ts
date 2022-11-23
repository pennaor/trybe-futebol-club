export default class Unauthorized extends Error {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = 'AppError';
    this.statusCode = 401;
  }
}
