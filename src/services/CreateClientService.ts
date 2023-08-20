import { client, filaId } from "../utils/database"


class CreateClientService{
    async execute(id:string, estimatedItems: number, initialTime: Date, finalTime: Date){

        const createClient = client.push({
            id: id,
            estimatedItems,
            position:1,
            situation:{
                status: "Pendente"
            },
            initialTime,
            finalTime,
            filaId:filaId

        })

        return createClient
    }
}

export { CreateClientService }