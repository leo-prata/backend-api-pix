import { Request, Response } from 'express';
import DeleteGameService from '../../services/jogo/DeleteGameService';

class DeleteGameController{
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try{
            await DeleteGameService.execute(id);
            return res.status(204).send();
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Erro ao deletar jogo: ", error.message);
                return res.status(500).json({ message: "Erro ao deletar jogo" });
            } else {
                console.error("Erro desconhecido ao deletar jogo");
                return res.status(500).json({ message: "Erro desconhecido ao deletar jogo" });
            }
        }
    }
}

export default new DeleteGameController();