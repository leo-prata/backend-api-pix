import { Request, Response } from 'express';
import UpdateGameService from '../../services/jogo/UpdateGameService';

class UpdateGameController{
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { estaPago } = req.body;

        try{
            await UpdateGameService.execute(id, estaPago);
            return res.status(204).json("Jogo atualizado com sucesso");
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Erro ao atualizar jogo: ", error.message);
                return res.status(500).json({ message: "Erro ao atualizar jogo" });
            } else {
                console.error("Erro desconhecido ao atualizar jogo");
                return res.status(500).json({ message: "Erro desconhecido ao atualizar jogo" });
            }
        }
    }
}

export default new UpdateGameController();