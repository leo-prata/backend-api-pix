"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreatePaymentController_1 = __importDefault(require("./controllers/payment/CreatePaymentController"));
const GetPaymentInfoController_1 = __importDefault(require("./controllers/payment/GetPaymentInfoController"));
const CreateWebhookController_1 = __importDefault(require("./controllers/webhook/CreateWebhookController"));
const GetWebhookController_1 = __importDefault(require("./controllers/webhook/GetWebhookController"));
const CreateGameController_1 = __importDefault(require("./controllers/jogo/CreateGameController"));
const ListGameController_1 = __importDefault(require("./controllers/jogo/ListGameController"));
const DeleteGameController_1 = __importDefault(require("./controllers/jogo/DeleteGameController"));
const UpdateGameController_1 = __importDefault(require("./controllers/jogo/UpdateGameController"));
const router = (0, express_1.Router)();
exports.router = router;
//payment routes
router.post('/create-pix', CreatePaymentController_1.default.handle);
router.get('/payment-info/:id', GetPaymentInfoController_1.default.handle);
//webhook routes
router.get('/webhook', GetWebhookController_1.default.handle);
router.post('/webhook', CreateWebhookController_1.default.handle);
//game routes
router.post('/jogos', CreateGameController_1.default.handle);
router.get('/jogos', ListGameController_1.default.handle);
router.delete('/jogos/:id', DeleteGameController_1.default.handle);
router.put('/jogos/:id', UpdateGameController_1.default.handle);
//index route
router.get('/', (req, res) => {
    res.send('Hello World');
});
