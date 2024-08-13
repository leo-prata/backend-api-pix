import { Router } from 'express';
import CreatePaymentController from './controllers/payment/CreatePaymentController';
import GetPaymentInfoController from './controllers/payment/GetPaymentInfoController';
import CreateWebhookController from './controllers/webhook/CreateWebhookController';
import GetWebhookController from './controllers/webhook/GetWebhookController';

const router = Router();

//payment routes
router.post('/create-pix',  CreatePaymentController.handle);
router.get('/payment-info/:id', GetPaymentInfoController.handle);

//webhook routes
router.get('/webhook',  GetWebhookController.handle);
router.post('/webhook',  CreateWebhookController.handle);


export { router };