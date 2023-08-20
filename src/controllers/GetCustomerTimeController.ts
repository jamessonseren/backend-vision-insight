import { Request, Response } from "express";
import { GetCustomerTimeService } from "../services/GetCustomerTimeService";


class GetCustomerTimeController{
    async handle(req: Request, res: Response){
        
        const clientId = req.params.clientId as string

        const {quantityInCart} = req.body

        const getCustomerTime = new GetCustomerTimeService()

        const customerTime = await getCustomerTime.execute({quantityInCart, clientId})

        return res.json(customerTime)
    }
}

export { GetCustomerTimeController }