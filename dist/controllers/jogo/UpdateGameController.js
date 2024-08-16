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
const UpdateGameService_1 = __importDefault(require("../../services/jogo/UpdateGameService"));
class UpdateGameController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { estaPago } = req.body;
            try {
                yield UpdateGameService_1.default.execute(id, estaPago);
                return res.status(204).json("Jogo atualizado com sucesso");
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error("Erro ao atualizar jogo: ", error.message);
                    return res.status(500).json({ message: "Erro ao atualizar jogo" });
                }
                else {
                    console.error("Erro desconhecido ao atualizar jogo");
                    return res.status(500).json({ message: "Erro desconhecido ao atualizar jogo" });
                }
            }
        });
    }
}
exports.default = new UpdateGameController();
