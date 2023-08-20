import { Request, Response } from "express";
import { UpdateCustomerSituationService } from "../services/UpdateCustomerSituationServices";

class UpdateCustomerSituationController{
    async handle(req:Request, res: Response){
        const clientId = req.query.clientId as string

        const updateCustomerSituation = new UpdateCustomerSituationService()

        const customer = await updateCustomerSituation.execute(clientId)

        return res.json(customer)
    }
}

export { UpdateCustomerSituationController}