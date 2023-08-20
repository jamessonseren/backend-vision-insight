import { Request, Response } from "express-serve-static-core";
import { GetClientService } from "../services/GetClientService";

class GetClientController{
    async handle(req: Request, res: Response){

        const clientId = req.query.clientId as string

        const getClient = new GetClientService()

        const client = await getClient.execute(clientId)

        return res.json(client)
    }
}

export { GetClientController }