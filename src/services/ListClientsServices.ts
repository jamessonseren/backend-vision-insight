import { client } from "../utils/database"

class ListClientsService{
    async execute(){
        return client
    }
}

export { ListClientsService }