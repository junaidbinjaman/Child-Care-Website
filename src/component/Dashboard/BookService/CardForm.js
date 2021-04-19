import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import "./BookService.css";

const CardForm = (props) => {
    const bookingInfo = props.bookingInfo;
    const [paymentSeccess, setPaymentSuccess] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.log("[error]", error);
        } else {
            const formData = new FormData();
            formData.append("name", bookingInfo.name);
            formData.append("email", bookingInfo.email);
            formData.append("serviceTitle", bookingInfo.serviceTitle);
            formData.append("cardBrand", paymentMethod.card.brand);
            formData.append("paymentId", paymentMethod.id);

            setPaymentSuccess(
                "Youe payment has been made successfully. We will contact you very soon"
            );

            fetch("http://localhost:5000/addOrder", {
                    method: "POST",
                    body: formData,
                })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        CardElement / >
        <
        p style = {
            { marginBottom: "-10px", marginTop: "10px" } } >
        Total Payment: $100 <
        /p> <
        button className = "btn-global"
        type = "submit"
        disabled = {!stripe } >
        Make Payment <
        /button> <
        p style = {
            { color: "green" } } > { paymentSeccess } < /p> <
        /form>
    );
};

export default CardForm;