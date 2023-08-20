import { caixa, client, fila } from "../utils/database"

class CompleteClientPurchaseService{
    async execute(clientId: string){
        const getClient = client.find(client => client.id === clientId)

        if(getClient){
            let clientStatus = getClient.situation.status
            if(clientStatus !== "EmAndamento"){
                throw new Error("Não é possível finalizar a compra do cliente")
            }

            const updateStatus = getClient.situation.status = "Finalizado"

            if(updateStatus === "Finalizado"){
                getClient.filaId = ""
                
                
            }

    
            getClient.finalTime = new Date()

            await this.calculateTime(getClient.finalTime, getClient.initialTime)

            let sameLine = client.map(item => {
                item.filaId === clientId
            })

        
            return getClient
        }
    }

    

    private async calculateTime(finalTime: Date, initialTime: Date){
        let timeCalculation = +finalTime - +initialTime
        return timeCalculation
    }
    
}

export {CompleteClientPurchaseService}