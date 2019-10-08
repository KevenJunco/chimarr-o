import {Request, Response} from 'express'

import Questao1 from '../schemas/Questao1'

class Questao1Controller {
    
    public async index (req: Request, res: Response): Promise<Response> {
        const target = await Questao1.find()

        return res.json(target)

    }

    public async store (req:Request, res:Response): Promise<Response>{
        
        const target = await Questao1.create(req.body)
        return res.json(target)
    }

}

export default new Questao1Controller()