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
const ListGameService_1 = __importDefault(require("../../services/jogo/ListGameService"));
class ListGameController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jogos = yield ListGameService_1.default.execute();
                return res.json(jogos);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error("Erro ao listar jogos: ", error.message);
                    return res.status(500).json({ message: "Erro ao listar jogos" });
                }
                else {
                    console.error("Erro desconhecido ao listar jogos");
                    return res.status(500).json({ message: "Erro desconhecido ao listar jogos" });
                }
            }
        });
    }
}
exports.default = new ListGameController();
