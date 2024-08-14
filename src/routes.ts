import { Router } from 'express';

import CreatePaymentController from './controllers/payment/CreatePaymentController';
import GetPaymentInfoController from './controllers/payment/GetPaymentInfoController';

import CreateWebhookController from './controllers/webhook/CreateWebhookController';
import GetWebhookController from './controllers/webhook/GetWebhookController';

import CreateGameController from './controllers/jogo/CreateGameController';
import ListGameController from './controllers/jogo/ListGameController';
import DeleteGameController from './controllers/jogo/DeleteGameController';
import UpdateGameController from './controllers/jogo/UpdateGameController';

const router = Router();

//payment routes
router.post('/create-pix',  CreatePaymentController.handle);
router.get('/payment-info/:id', GetPaymentInfoController.handle);

//webhook routes
router.get('/webhook',  GetWebhookController.handle);
router.post('/webhook',  CreateWebhookController.handle);

//game routes
router.post('/jogos', CreateGameController.handle);
router.get('/jogos', ListGameController.handle);
router.delete('/jogos/:id', DeleteGameController.handle);
router.put('/jogos/:id', UpdateGameController.handle);

export { router };