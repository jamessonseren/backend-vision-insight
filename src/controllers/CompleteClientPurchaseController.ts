import { Request, Response } from "express";
import { CompleteClientPurchaseService } from "../services/CompleteClientPurchaseService";

class CompleteClientPurchaseController{
    async handle(req: Request, res: Response){
        const clientId = req.query.clientId as string

        const completeClientPurchase = new CompleteClientPurchaseService()

        const client = await completeClientPurchase.execute(clientId)

        return res.json(client)
    }
}

export {CompleteClientPurchaseController}