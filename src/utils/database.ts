//G1 = 15
// G2 = 30
// G3 = 60

interface ICliente {
    id: string,
    estimatedItems: number,
    position:number,
    situation:{
        // status: "EmAberto"| "pendente" | "EmAndamento" | "Finalizado";
        status:string
    },
    initialTime: Date,
    finalTime: Date,
    filaId: string
}
export const initialTime: Date = new Date(0);
export const finalTime: Date = new Date(0);


export const initialSituation: ICliente["situation"]["status"] = "EmAberto";
export const filaId: ICliente["filaId"] = ""

export let client: ICliente[]= [
    {
        id:'1',
        estimatedItems: 10,
        position: 1,
        situation: {
            status:"EmAndamento"
        },
        initialTime: new Date("2023-08-20T15:00:00.000Z"),
        finalTime: finalTime,
        filaId: "fila1"
    },
    {
        id:'2',
        estimatedItems: 5,
        position: 1,
        situation: {
            status: "EmAndamento"
        },
        initialTime:new Date("2023-08-20T15:00:00.000Z"),
        finalTime: finalTime,
        filaId:"fila2"
    },
    {
        id:'3',
        estimatedItems: 15,
        position: 0,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime,
        filaId: filaId
    },
    
]

interface ICaixa {
    id: string,
    clientId: string | null,
    
    
}
const ClientId: string = "";

const estimatedTime: string = ""
const totalItems: number = 1

export let caixa: ICaixa[] = [
    {
        id: "c1",
        clientId: ClientId 
    },
    {
        id: "c2",
        clientId: ClientId
    },
    {
        id: "c3",
        clientId: ClientId
    },
]

export let fila = [
    {
        id:"fila1",
        idCaixa: "c1",
        estimatedTime:estimatedTime,
        TotalItems: totalItems,
    },
    {
        id:"fila2",
        idCaixa: "c2",
        estimatedTime:estimatedTime,
        TotalItems: totalItems,
    },
    {
        id:"fila3",
        idCaixa: "c3",
        estimatedTime:estimatedTime,
        TotalItems: totalItems,
    },
]

