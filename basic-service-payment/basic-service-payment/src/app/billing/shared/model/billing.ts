import { Client } from "src/app/client/shared/model/client";
import { Service } from "src/app/service/shared/model/service";
import { Currency } from "./currency";
import { Status } from "./status";

export interface Billing {
    id: Number;
    service: string;
    client: string;
    period: string;
    status: Status;
    currency: Currency;
}



