import { Request, Response } from 'express';

class GetWebhookController {
  async handle(req: Request, res: Response) {
    console.log('GET req.body webhook');
    console.log(req.body);
    res.send('GET ok');
  }
}

export default new GetWebhookController();