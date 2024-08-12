import { Router } from 'express';
import CreatePaymentController from './controllers/payment/CreatePaymentController';

const router = Router();

//payment routes
router.post('/create-pix',  CreatePaymentController.handle);

export { router };