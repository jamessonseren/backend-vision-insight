import {Router, Request, Response } from "express"

import { GetCustomerTimeController } from "./controllers/GetCustomerTimeController"
import { UpdateCustomerSituationController } from "./controllers/UpdateCustomerSituationController"
import { ListClientsController } from "./controllers/ListClientsController"

const router = Router()

router.post("/customer/:clientId", new GetCustomerTimeController().handle)

router.put('/customer-status', new UpdateCustomerSituationController().handle)

router.get('/clients', new ListClientsController().handle)

export {router}