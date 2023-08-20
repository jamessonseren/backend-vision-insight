import {Router, Request, Response } from "express"

import { GetCustomerTimeController } from "./controllers/CalculateCheckoutTimeController"
import { UpdateCustomerSituationController } from "./controllers/UpdateCustomerSituationController"
import { ListClientsController } from "./controllers/ListClientsController"
import { CompleteClientPurchaseController } from "./controllers/CompleteClientPurchaseController"
import { CreateClientController } from "./controllers/CreateClientController"

const router = Router()

router.post("/customer/:clientId", new GetCustomerTimeController().handle)

router.put('/customer-status', new UpdateCustomerSituationController().handle)

router.get('/clients', new ListClientsController().handle)

router.put("/complete-purchase", new CompleteClientPurchaseController().handle)

router.post('/new-client', new CreateClientController().handle)

export {router}