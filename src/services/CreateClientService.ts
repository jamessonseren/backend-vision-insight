import { client, fila } from "../utils/database"


class CreateClientService{
    async execute(id:string, estimatedItems: number, initialTime: Date, finalTime: Date){

        let fila1 = 0;

        let fila2 = 0;
      
        let clientesFila1 = client.map(c=>{
            if(c.filaId=="fila1"){

                fila1 = fila1 + c.estimatedItems;   
                
            }
        })

        let clientesFila2 = client.map(c=>{
            if(c.filaId=="fila2"){
                fila2 = fila2 + c.estimatedItems;

                return c;
            }
        })

        if(fila1 > fila2 ){
            const createClient = client.push({
                id: id,
                estimatedItems,
                position: clientesFila2.length -1,
                situation:{
                    status: "Pendente"
                },
                initialTime,
                finalTime,
                filaId:"fila2"
    
            })
        return createClient

    
        }else if (fila2 > fila1){
            const createClient = client.push({
                id: id,
                estimatedItems,
                position: clientesFila1.length -1,
                situation:{
                    status: "Pendente"
                },
                initialTime,
                finalTime,
                filaId:"fila1"
    
            })
        return createClient

        

        }

       
    }
}

export { CreateClientService }