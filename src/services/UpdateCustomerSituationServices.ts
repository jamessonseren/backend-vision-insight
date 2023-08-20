import { caixa, client } from "../utils/database"

class UpdateCustomerSituationService{
    async execute(clientId: string){

        const getCustomer = client.find(client => client.id === clientId)

        if(getCustomer){
            const updateCustomer = getCustomer.situation.status = "EmAndamento"
            if(updateCustomer){
                const updateInitialTime = client.find(client => client.initialTime = new Date())
                return updateInitialTime
            }
        }
    }
}
export { UpdateCustomerSituationService }