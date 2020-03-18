import { Router } from 'express';

import RecipientController from './app/controller/RecipientsController';
import SesseionController from './app/controller/SesseionController';

import authMiddleware from './app/middlewares/Auth';

const routes = new Router();

routes.post('/sessions', SesseionController.store);
routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.get('/recipients/:id', RecipientController.listById);
routes.get('/recipients', RecipientController.listAll);
routes.delete('/recipients/:id', RecipientController.deleteById);

export default routes;
