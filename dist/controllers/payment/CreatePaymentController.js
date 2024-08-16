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
const uuid_1 = require("uuid");
dotenv_1.default.config();
class CreatePaymentController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const client = new mercadopago_1.MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN || '',
                options: { timeout: 5000, idempotencyKey: 'abc' }
            });
            const payment = new mercadopago_1.Payment(client);
            const body = {
                transaction_amount: req.body.transaction_amount,
                description: req.body.description,
                payment_method_id: req.body.paymentMethodId,
                payer: {
                    email: req.body.email,
                    identification: {
                        type: req.body.identificationType,
                        number: req.body.number
                    }
                },
                notification_url: "https://cf32-186-235-106-214.ngrok-free.app/webhook"
            };
            const requestOptions = { idempotencyKey: (0, uuid_1.v4)() };
            const result = yield payment.create({ body, requestOptions });
            const qrCode = (_b = (_a = result.point_of_interaction) === null || _a === void 0 ? void 0 : _a.transaction_data) === null || _b === void 0 ? void 0 : _b.qr_code;
            const qr_code_base64 = (_d = (_c = result.point_of_interaction) === null || _c === void 0 ? void 0 : _c.transaction_data) === null || _d === void 0 ? void 0 : _d.qr_code_base64;
            const paymentId = result.id;
            if (qrCode) {
                // Resposta com o QR Code
                return res.json({ qrCode, qr_code_base64, paymentId });
            }
            else {
                return res.status(400).json({ message: 'QR Code não encontrado' });
            }
        });
    }
    catch(err) {
        console.error('Erro ao criar pagamento:', err);
        const res = err.response;
        return res.status(500).json({ message: 'Erro ao criar pagamento' });
    }
}
exports.default = new CreatePaymentController();
