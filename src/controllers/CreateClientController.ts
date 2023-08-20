import { Request, Response } from "express";
import { CreateClientService } from "../services/CreateClientService";

import { initialTime } from "../utils/database";


class CreateClientController{
    async handle(req: Request, res: Response){
        const estimatedItems = req.body as number

        const createClient = new CreateClientService()

        const initialTime = new Date(0)
        const finalTime = new Date(0)

        const client = await createClient.execute(estimatedItems, initialTime, finalTime)

        return res.json(client)

    }
}

export { CreateClientController }