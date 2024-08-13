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
  notification_url: string;
}

class CreatePaymentController {
   async handle(req: Request, res: Response) {
     
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
      }},
      notification_url: "https://cf32-186-235-106-214.ngrok-free.app/"
    };

    const requestOptions = { idempotencyKey: v4() };

    const result = await payment.create({ body, requestOptions });

    const qrCode = result.point_of_interaction?.transaction_data?.qr_code;
    const qr_code_base64 = result.point_of_interaction?.transaction_data?.qr_code_base64;

    if (qrCode) {
      // Resposta com o QR Code
      return res.json({ qrCode, qr_code_base64 });
    } else {
      return res.status(400).json({ message: 'QR Code não encontrado' });
    }
  } catch (err: any) {
    console.error('Erro ao criar pagamento:', err);
    const res = err.response;
    return res.status(500).json({ message: 'Erro ao criar pagamento' });
  }
   
  }


export default new CreatePaymentController();