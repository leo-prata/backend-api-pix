"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateWebhookController {
    handle(req, res) {
        console.log('POST req.body webhook');
        console.log(req.body);
        res.send('POST ok');
    }
}
exports.default = new CreateWebhookController();
