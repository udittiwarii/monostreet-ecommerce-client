import API from "../axios";
import {
    PAYMENT_ENDPOINTS,
} from "./paymentEndpoints";

// CREATE PAYMENT


export const createPayment =
    async (orderId) => {

        const { data } =
            await API.post(
                PAYMENT_ENDPOINTS.CREATE_PAYMENT.replace(':orderId', orderId)
            );

        return data;
    };

export const verifyPayment =
    async (payload) => {

        const { data } =
            await API.post(
                PAYMENT_ENDPOINTS.VERIFY_PAYMENT,
                payload
            );

        return data;
    };