import { caixa, client } from "../utils/database"

class UpdateCustomerSituationService{
    async execute(clientId: string){

        const getCustomer = client.find(client => client.id === clientId)
        console.log("getcustomer: ",getCustomer)
        if(getCustomer){
            
            getCustomer.situation.status = "EmAndamento"
          
            getCustomer.initialTime = new Date() 
                
            return getCustomer
            
        }

    }
}
export { UpdateCustomerSituationService }