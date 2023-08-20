import { caixa, client, fila } from "../utils/database"

class UpdateCustomerSituationService{
    async execute(clientId: string, situacao:string){

        const getCustomer = client.find(client => client.id === clientId)
       
        if(getCustomer){
            
            getCustomer.situation.status = situacao
          
            if(situacao == "Pendente"){
                let fila1 = 0;

                let fila2 = 0;
              
                let clientesFila1 = client.map(c=>{
                    if(c.filaId=="fila1"){
                        fila1 = fila1 + c.estimatedItems;

                        return c;
                    }
                })

                let clientesFila2 = client.map(c=>{
                    if(c.filaId=="fila2"){
                        fila2 = fila2 + c.estimatedItems;

                        return c;
                    }
                })

                if(fila1 > fila2 ){
                    
                    getCustomer.position = clientesFila2.length -1;
                    getCustomer.filaId = "fila2";
                }else if (fila2 > fila1){
                    getCustomer.filaId = "fila1";

                    getCustomer.position = clientesFila1.length -1;

                }
                
            }
            

            getCustomer.initialTime = new Date() 
                
            return getCustomer
            
        }

    }
}
export { UpdateCustomerSituationService }