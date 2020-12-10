import { Application } from 'express';
import bodyParser from 'body-parser';

export default (app: Application): void => {
  app.use(bodyParser.json());
};
