import {Router, Request, Response } from "express"

// import { CalculateClientLineController } from "./controllers/CalculateClientLineController"
import { UpdateCustomerSituationController } from "./controllers/UpdateCustomerSituationController"
import { ListClientsController } from "./controllers/ListClientsController"
import { CompleteClientPurchaseController } from "./controllers/CompleteClientPurchaseController"
import { CreateClientController } from "./controllers/CreateClientController"

const router = Router()

router.put('/customer-status', new UpdateCustomerSituationController().handle)

router.get('/clients', new ListClientsController().handle)

router.put("/complete-purchase", new CompleteClientPurchaseController().handle)

router.post('/new-client', new CreateClientController().handle)

// router.put('/client-line', new CalculateClientLineController().handle)

export {router}