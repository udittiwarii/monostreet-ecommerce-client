const ORDER_BASE_URL =
    import.meta.env.VITE_PAYMENT_SERVICE;

export const PAYMENT_ENDPOINTS = {

    CREATE_PAYMENT:
        `${ORDER_BASE_URL}/api/payments/:orderId`,
    VERIFY_PAYMENT:
        `${ORDER_BASE_URL}/api/payments/verify/payment`,
};