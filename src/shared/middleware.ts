import { Application, NextFunction, Request, Response } from 'express';

export default (app: Application) => {
  app.use(function onError(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res.statusCode = 500;
    res
      .json({
        success: false,
        error: err.message,
        stack: err.stack ? err.stack.split('\n').map((r) => r.trim()) : [],
      })
      .end();
  });
};
