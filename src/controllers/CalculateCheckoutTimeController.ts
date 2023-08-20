import { Request, Response } from "express";
import { CalculateCheckOutTimeService } from "../services/CalculateCheckOutTimeService";

class GetCustomerTimeController{
    async handle(req: Request, res: Response){
        const clientId = req.query.clientId as string
        

        
    }
}

export { GetCustomerTimeController }