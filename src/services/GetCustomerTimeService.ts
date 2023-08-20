import { caixa, client } from "../utils/database"

interface CustomerTimeRequest{
    clientId: number,
    quantityInCart: string
}
class GetCustomerTimeService{
    async execute({quantityInCart, clientId}: CustomerTimeRequest){
        let findClient = caixa.find(caixa => caixa.clientId === clientId)

        
        if(findClient){
            console.log("hora inicio", findClient.horaInicio)

            console.log("hora fim", findClient.horaFinal)
        }
       
    }
}

export { GetCustomerTimeService }