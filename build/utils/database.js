"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fila = exports.caixa = exports.client = void 0;
const initialTime = new Date(0);
const finalTime = new Date(0);
const initialSituation = "pendente";
exports.client = [
    {
        id: '1',
        estimatedItems: "G2",
        position: 1,
        situation: {
            status: "EmAndamento"
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id: '2',
        estimatedItems: "G2",
        position: 1,
        situation: {
            status: "EmAndamento"
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id: '3',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: "EmAndamento"
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id: '4',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id: '5',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id: '6',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id: '7',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id: '8',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id: '9',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
    {
        id: '10',
        estimatedItems: "G1",
        position: 1,
        situation: {
            status: initialSituation
        },
        initialTime: initialTime,
        finalTime: finalTime
    },
];
const ClientId = "";
const estimatedTime = " ";
exports.caixa = [
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
];
exports.fila = [
    {
        id: "fila1",
        idCaixa: "c1",
        estimatedTime: estimatedTime,
        TotalItems: "",
    },
    {
        id: "fila2",
        idCaixa: "c2",
        estimatedTime: estimatedTime,
        TotalItems: "",
    },
    {
        id: "fila3",
        idCaixa: "c3",
        estimatedTime: estimatedTime,
        TotalItems: "",
    },
];
