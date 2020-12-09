import { Application, Request, Response } from 'express';

import asyncMethod from '../shared/async-method';
import test from '../app/testMethod';

export default (app: Application): void => {
  app.get('/test', asyncMethod(test));

  app.get(
    '/test2',
    asyncMethod(async (req: Request, res: Response) => {
      res.json({ success: 'test2' }).end();
    })
  );
};
