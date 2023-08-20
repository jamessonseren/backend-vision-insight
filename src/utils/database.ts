
interface ICliente {
    id: string,
    estimatedItems: string,
    position:number,
    situation:{
        status: "pendente" | "EmAndamento" | "Finalizado";
    },
    initialTime: Date,
    finalTime: Date
}
const initialTime: Date = new Date(0);
const finalTime: Date = new Date(0);


const initialSituation: ICliente["situation"]["status"] = "pendente";
export let client: ICliente[]= [
    {
        id:'1',
        estimatedItems: "G2",
        position: 1,
        situation: {
            status: "EmAndamento"
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id:'2',
        estimatedItems: "G2",
        position: 1,
        situation: {
            status: "EmAndamento"
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id:'3',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: "EmAndamento"
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id:'4',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id:'5',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id:'6',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id:'7',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id:'8',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id:'9',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id:'10',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
]

interface ICaixa {
    id: string,
    clientId: string | null,
    
    
}
const ClientId: string = "";

const estimatedTime: string = " "
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

