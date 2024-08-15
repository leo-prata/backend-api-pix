import { database } from '../../config/firebaseAdmin';
import { CollectionReference, QuerySnapshot, DocumentData } from 'firebase-admin/firestore';

interface Jogo {
    id: string;
    nome: string;
    data: string;
    horario: string;
    local: string;
    valor: number;
    estaPago: boolean;
}

class ListGameService{
    private jogosCollection: CollectionReference;

    constructor() {
        this.jogosCollection = database.collection('jogos');
    }

    async execute(): Promise<Jogo[]> {
        try {
            const snapshot: QuerySnapshot = await this.jogosCollection.get();
            const jogos: Jogo[] = snapshot.docs.map((doc: DocumentData) => ({
                id: doc.id,
                nome: doc.data().nome,
                data: doc.data().data,
                horario: doc.data().horario,
                local: doc.data().local,
                valor: doc.data().valor,
                estaPago: doc.data().estaPago,
            }));
            
            return jogos;
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

export default new ListGameService();