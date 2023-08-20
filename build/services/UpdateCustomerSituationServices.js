"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerSituationService = void 0;
const database_1 = require("../utils/database");
class UpdateCustomerSituationService {
    execute(clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const getCustomer = database_1.client.find(client => client.id === clientId);
            console.log("getcustomer: ", getCustomer);
            if (getCustomer) {
                getCustomer.situation.status = "EmAndamento";
                getCustomer.initialTime = new Date();
                return getCustomer;
            }
        });
    }
}
exports.UpdateCustomerSituationService = UpdateCustomerSituationService;
