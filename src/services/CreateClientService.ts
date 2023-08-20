import { client } from "../utils/database"


class CreateClientService{
    async execute(estimatedItems: number, initialTime: Date, finalTime: Date){

        const createClient = client.push({
            id: '11',
            estimatedItems,
            position:1,
            situation:{
                status: "pendente"
            },
            initialTime,
            finalTime,
            filaId:"fila1"

        })

        return createClient
    }
}

export { CreateClientService }