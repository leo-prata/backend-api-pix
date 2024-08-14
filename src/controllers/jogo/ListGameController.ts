import e, { Request, Response } from 'express';
import ListGameService from '../../services/jogo/ListGameService';

class ListGameController{
    async handle(req: Request, res: Response): Promise<Response> {
        try{
            const jogos = await ListGameService.execute();
            return res.json(jogos);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Erro ao listar jogos: ", error.message);
                return res.status(500).json({ message: "Erro ao listar jogos" });
            } else {
                console.error("Erro desconhecido ao listar jogos");
                return res.status(500).json({ message: "Erro desconhecido ao listar jogos" });
            }
        }
    }
}

export default new ListGameController();