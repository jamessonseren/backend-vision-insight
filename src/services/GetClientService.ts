import { client } from "../utils/database";

class GetClientService{
    async execute(clientId: string){
        const getClient = client.find(client => client.id === clientId)

        return getClient
    }
}

export { GetClientService }