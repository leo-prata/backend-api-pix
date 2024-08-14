import { database } from '../../config/firebaseAdmin';
import { CollectionReference } from 'firebase-admin/firestore';

class DeleteGameService {
    private jogosCollection: CollectionReference;

    constructor() {
        this.jogosCollection = database.collection('jogos');
    }

    async execute(id: string): Promise<void> {
        try {
            const jogoDoc = this.jogosCollection.doc(id);
            const jogo = await jogoDoc.get();

            if (!jogo.exists) {
                throw new Error('Jogo não encontrado');
            }

            await jogoDoc.delete();
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Erro ao deletar jogo: ", error.message);
                throw new Error('Erro ao deletar jogo');
            } else {
                console.error("Erro desconhecido ao deletar jogo");
                throw new Error('Erro desconhecido ao deletar jogo');
            }
        }
    }
}

export default new DeleteGameService();