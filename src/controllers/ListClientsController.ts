import {  Request, Response } from "express";
import { ListClientsService } from "../services/ListClientsServices";

class ListClientsController{
    async handle(req: Request, res: Response){
        const listClients = new ListClientsService()

        const clients = await listClients.execute()
        console.log(clients)
        return res.json(clients)
    }
}

export { ListClientsController }