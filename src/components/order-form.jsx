import React, { useState } from "react"
import { useOrder } from "../hooks";
import RequiredFiled from "./required-filed";

export default function OrderForm({ productId = undefined }) {
    const [validate, setValidate] = useState(false);
    const [sendOrder, orderingState] = useOrder();
    const [contact, setContact] = useState("");
    const [description, setDescription] = useState("");
    const itemDescription = `[Product_Id: ${productId}] `;
    const descriptionPlaceholder = (productId === undefined) ? "What is your order?" : "Any detail about your order? (optional)";


    function submitOrder(e) {
        console.log(validate)
        e.preventDefault();
        setValidate(true);

        if (contact.trim().length > 0 && (productId !== undefined || description.trim().length > 0)) {
            // @ts-ignore
            sendOrder(contact.trim(), (productId === undefined ? "" : itemDescription) + description.trim());
        }
    }
    return (<form className="flex flex-col items-center gap-3" onSubmit={submitOrder}>
        <div className="flex flex-col gap-1">
            <textarea
                value={contact}
                onChange={event => setContact(event.target.value)}
                placeholder="Where to contact you back: phone, telegram, facebook or other"
                rows={2}
                className="orderFormTextarea "
            ></textarea>
            <RequiredFiled show={validate && contact.trim().length == 0} className="mb-2" />
        </div>
        <div className="flex flex-col gap-1">
            <textarea
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder={descriptionPlaceholder}
                rows={4}
                className="orderFormTextarea"
            ></textarea>
            <RequiredFiled show={validate && productId === undefined && description.trim().length == 0} className="mb-2" />
        </div>
        <div className={`flex gap-2 items-center my-3 ${orderingState !== "success" ? 'hidden' : ''}`}>
            <div className="bg-green-500 orderingStateInfoDecor"></div>
            <p className="text-green-700 orderingStateInfo text-center">Order Successfully submitted! Thank you.</p>
        </div>
        <div className={`flex gap-2 items-center my-3 ${orderingState !== "failed" ? 'hidden' : ''}`}>
            <div className="bg-red-500 orderingStateInfoDecor"></div>
            <p className="text-red-500 orderingStateInfo">Request failed! please try again.</p>
        </div>
        <input type="submit" value={`${orderingState !== "loading" ? 'Submit order' : 'Ordering...'}`} className="w-80 sm:w-[500px] button disabled:opacity-80" disabled={orderingState == "loading"} />
    </form>)
}