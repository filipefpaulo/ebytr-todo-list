export class ErrorHandler extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
  }
}
