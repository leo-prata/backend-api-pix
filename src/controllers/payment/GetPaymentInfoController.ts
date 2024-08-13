import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { MercadoPagoConfig, Payment } from 'mercadopago';

dotenv.config();

class GetPaymentInfoController {
  async handle(req: Request, res: Response) {
    try {
      const client = new MercadoPagoConfig({
        accessToken: process.env.ACCESS_TOKEN || '',
        options: { timeout: 5000 }
      });

      const payment = new Payment(client);

      const paymentId = req.params.id; 

      const result = await payment.get({ id: paymentId });

      return res.json(result);
    } catch (err: any) {
      console.error('Erro ao obter informações do pagamento:', err);
      return res.status(500).json({ message: 'Erro ao obter informações do pagamento' });
    }
  }
}

export default new GetPaymentInfoController();