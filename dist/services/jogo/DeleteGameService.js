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
Object.defineProperty(exports, "__esModule", { value: true });
const firebaseAdmin_1 = require("../../config/firebaseAdmin");
class DeleteGameService {
    constructor() {
        this.jogosCollection = firebaseAdmin_1.database.collection('jogos');
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jogoDoc = this.jogosCollection.doc(id);
                const jogo = yield jogoDoc.get();
                if (!jogo.exists) {
                    throw new Error('Jogo não encontrado');
                }
                yield jogoDoc.delete();
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error("Erro ao deletar jogo: ", error.message);
                    throw new Error('Erro ao deletar jogo');
                }
                else {
                    console.error("Erro desconhecido ao deletar jogo");
                    throw new Error('Erro desconhecido ao deletar jogo');
                }
            }
        });
    }
}
exports.default = new DeleteGameService();