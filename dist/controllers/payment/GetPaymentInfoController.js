"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mercadopago_1 = require("mercadopago");
dotenv_1.default.config();
class GetPaymentInfoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = new mercadopago_1.MercadoPagoConfig({
                    accessToken: process.env.ACCESS_TOKEN || '',
                    options: { timeout: 5000 }
                });
                const payment = new mercadopago_1.Payment(client);
                const paymentId = req.params.id;
                const result = yield payment.get({ id: paymentId });
                return res.json({ status: result.status });
            }
            catch (err) {
                console.error('Erro ao obter informações do pagamento:', err);
                return res.status(500).json({ message: 'Erro ao obter informações do pagamento' });
            }
        });
    }
}
exports.default = new GetPaymentInfoController();
