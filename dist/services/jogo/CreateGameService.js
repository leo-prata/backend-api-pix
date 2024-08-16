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
class CreateGameService {
    constructor() {
        this.jogosCollection = firebaseAdmin_1.database.collection('jogos');
    }
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome, data, horario, local, valor, estaPago = false }) {
            try {
                const docRef = yield this.jogosCollection.add({ nome, data, horario, local, valor, estaPago });
                return docRef.id;
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error("Erro ao listar jogos: ", error.message);
                    throw new Error('Erro ao listar jogos');
                }
                else {
                    console.error("Erro desconhecido ao listar jogos");
                    throw new Error('Erro desconhecido ao listar jogos');
                }
            }
        });
    }
}
exports.default = new CreateGameService();
