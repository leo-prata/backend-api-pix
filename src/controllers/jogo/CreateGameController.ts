import { Request, Response } from "express";
import  CreateGameService  from "../../services/jogo/CreateGameService";

class CreateGameController {
  async handle(req: Request, res: Response): Promise<void> {
    try{
        const { nome, data, horario, local, valor, estaPago } = req.body;
        if(!nome || !data || !horario || !local || !valor){
            res.status(400).send({ error: 'Dados inválidos' });
            return;
        }

        const jogoId = await CreateGameService.execute({nome, data, horario, local, valor, estaPago});
        res.status(201).send({ id: jogoId });
    }catch(error){
        res.status(500).send({ error: 'Erro ao criar jogo' });
    }
  }
}

export default new CreateGameController();