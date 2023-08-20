import { caixa, client } from "../utils/database"

class CompleteClientPurchaseService{
    async execute(clientId: string){
        const getClient = client.find(client => client.id === clientId)

        if(getClient){
            let clientStatus = getClient.situation.status
            if(clientStatus === "Finalizado"){
                throw new Error("Cliente já finalizou a compra")

            }else if(clientStatus === "pendente"){
                throw new Error("Cliente ainda não incializou a compra")
            }

            getClient.situation.status = "Finalizado"

    
            getClient.finalTime = new Date()

            await this.calculateTime(getClient.finalTime, getClient.initialTime)

            let sameLine = client.map(item => {
                item.filaId === clientId
            })

            


            return getClient
        }
    }

    // private async calculateTime(getClient: any){
    //     let results: number;

    //     let timeCalculation = (getClient.finalTime - getClient.initialTime)
    //     let sameFila = client.map((item) => {
    //         item.filaId === getClient.filaId
    //     })

    //     sameFila.forEach(item => {
    //         results = (item.estimatedItems * timeCalculation) + results;
            
    //     })
    // }

    private async calculateTime(finalTime: Date, initialTime: Date){
        let timeCalculation = +finalTime - +initialTime
        return timeCalculation
    }
    
}

export {CompleteClientPurchaseService}