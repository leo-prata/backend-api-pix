import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { v4 } from 'uuid';

dotenv.config();

interface PayerIdentification {
  type: string;
  number: string;
}

interface Payer {
  email: string;
  identification: PayerIdentification;
}

interface PaymentBody {
  transaction_amount: number;
  description: string;
  payment_method_id: string;
  payer: Payer;
}

class CreatePaymentController {
   handle(req: Request, res: Response) {
     
    const client = new MercadoPagoConfig(
        { accessToken: process.env.ACCESS_TOKEN || '', 
          options: { timeout: 5000, idempotencyKey: 'abc' } 
        });
        
    const payment = new Payment(client);

    const body: PaymentBody = {
      transaction_amount: req.body.transaction_amount,
      description: req.body.description,
      payment_method_id: req.body.paymentMethodId,
          payer: {
          email: req.body.email,
          identification: {
      type: req.body.identificationType,
      number: req.body.number
      }}
    };

    const requestOptions = { idempotencyKey: v4() };

    payment.create({ body, requestOptions })
    .then((result) => {
      console.log('result');
      console.log(result);
    })
    .catch((err) => {
      console.log('error');
      console.log(err);
    });
  
    return res.json({ message: 'Payment created' });  
  }
}

export default new CreatePaymentController();