import { Request, Response } from 'express';

export default async (req: Request, res: Response): Promise<void> => {
  res
    .json({
      success: true,
      queryValues: req.query,
    })
    .end();
};
