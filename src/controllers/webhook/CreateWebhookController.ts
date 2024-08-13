import { Request, Response } from 'express';

class CreateWebhookController {
   handle(req: Request, res: Response) {
        console.log('POST req.body webhook');
        console.log(req.body);
        res.send('POST ok');
    }
}

export default new CreateWebhookController();