import { Request, Response } from "express-serve-static-core";
import { ListLineService } from "../services/ListLineService";

class ListLineController{
    async handle(req: Request, res: Response){
        const listLines = new ListLineService()

        const lines = await listLines.execute()

        return res.json(lines)
    }
}

export { ListLineController }