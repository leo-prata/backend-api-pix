import { database } from '../../config/firebaseAdmin';
import { CollectionReference } from 'firebase-admin/firestore';

class UpdateGameService{
    private jogosCollection: CollectionReference;

    constructor(){
        this.jogosCollection = database.collection('jogos');
    }

    async execute(id: string, estaPago: boolean): Promise<void> {
        try {
            const jogoDoc = this.jogosCollection.doc(id);
            const jogo = await jogoDoc.get();

            if (!jogo.exists) {
                throw new Error('Jogo não encontrado');
            }

            await jogoDoc.update({ estaPago });
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Erro ao atualizar jogo: ", error.message);
                throw new Error('Erro ao atualizar jogo');
            } else {
                console.error("Erro desconhecido ao atualizar jogo");
                throw new Error('Erro desconhecido ao atualizar jogo');
            }
        }
    }
}

export default new UpdateGameService();