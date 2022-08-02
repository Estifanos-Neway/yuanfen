import axios from 'axios';
import React, { useState } from 'react'
import { ordersUrl } from '../commons/variables';

export default function useOrder() {
    const [orderingState, setOrderingState] = useState("none");
    async function sendOrder(contact, description) {
        setOrderingState("loading");
        try {
            await axios.post(
                ordersUrl,
                { contact, description },
                {
                    validateStatus: (status => status === 200)
                }
            )
            setOrderingState("success");
        } catch (e) {
            setOrderingState("failed");
            console.error(e)
        }
    }

    return [sendOrder, orderingState];
}
