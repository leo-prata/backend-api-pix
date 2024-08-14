import { database } from '../../config/firebaseAdmin';
import { CollectionReference, DocumentReference } from 'firebase-admin/firestore';

interface Jogo {
    nome: string;
    data: string;
    horario: string;
    local: string;
    valor: number;
    estaPago?: boolean;
  }

class CreateGameService {
    private jogosCollection: CollectionReference;

    constructor() {
        this.jogosCollection = database.collection('jogos');
    }
    
    async execute({nome, data, horario, local, valor, estaPago = false}: Jogo): Promise<string> {
        try {
            const docRef: DocumentReference = await this.jogosCollection.add({nome, data, horario, local, valor, estaPago});
            return docRef.id;
          } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Erro ao listar jogos: ", error.message);
                throw new Error('Erro ao listar jogos');
            } else {
                console.error("Erro desconhecido ao listar jogos");
                throw new Error('Erro desconhecido ao listar jogos');
            }
        }
    }
  
}

export default new CreateGameService();