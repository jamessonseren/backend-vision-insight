//G1 = 15
// G2 = 30
// G3 = 60

interface ICliente {
    id: string,
    estimatedItems: number,
    position:number,
    situation:{
        status: "pendente" | "EmAndamento" | "Finalizado";
    },
    initialTime: Date,
    finalTime: Date,
    filaId: "fila1" | "fila2" | "fila3"
}
export const initialTime: Date = new Date(0);
export const finalTime: Date = new Date(0);


export const initialSituation: ICliente["situation"]["status"] = "pendente";
export const filaId: ICliente["filaId"] = "fila1"

export let client: ICliente[]= [
    {
        id:'1',
        estimatedItems: 30,
        position: 1,
        situation: {
            status: "EmAndamento"
        },
        initialTime: initialTime,
        finalTime: finalTime,
        filaId: filaId
    },
    {
        id:'2',
        estimatedItems: 30,
        position: 1,
        situation: {
            status: "EmAndamento"
        },
        initialTime: initialTime,
        finalTime: finalTime,
        filaId: filaId
    },
    {
        id:'3',
        estimatedItems: 15,
        position: 1,
        situation: {
            status: "EmAndamento"
        },
        initialTime: initialTime,
        finalTime: finalTime,
        filaId: filaId
    },
    {
        id:'4',
        estimatedItems: 15,
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime,
        filaId: filaId
    },
    {
        id:'5',
        estimatedItems: 15,
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime,
        filaId: filaId
    },
    {
        id:'6',
        estimatedItems: 15,
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime,
        filaId: filaId
    },
    {
        id:'7',
        estimatedItems: 15,
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime,
        filaId: filaId
    },
    {
        id:'8',
        estimatedItems: 20,
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime,
        filaId: filaId
    },
    {
        id:'9',
        estimatedItems: 30,
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime,
        filaId: filaId
    },
    {
        id:'10',
        estimatedItems: 20,
        position: 1,
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
const totalItems: string = ""

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
        TotalItems: "",
    },
    {
        id:"fila2",
        idCaixa: "c2",
        estimatedTime:estimatedTime,
        TotalItems: "",
    },
    {
        id:"fila3",
        idCaixa: "c3",
        estimatedTime:estimatedTime,
        TotalItems: "",
    },
]

