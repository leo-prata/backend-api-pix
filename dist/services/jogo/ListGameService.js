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
class ListGameService {
    constructor() {
        this.jogosCollection = firebaseAdmin_1.database.collection('jogos');
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const snapshot = yield this.jogosCollection.get();
                const jogos = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    nome: doc.data().nome,
                    data: doc.data().data,
                    horario: doc.data().horario,
                    local: doc.data().local,
                    valor: doc.data().valor,
                    estaPago: doc.data().estaPago,
                }));
                return jogos;
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
exports.default = new ListGameService();
