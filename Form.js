import React from "react";
import FinalAmount from "./FinalAmount";

export default function Form() {

    const [formData, setFormData] = React.useState(
        {Monthly:"", Return:"", Time:"", finalAmount:0}
    )
    
    function onHandle(event) {
        const {name,value} = event.target
        let newFinalAmount = formData.finalAmount
        if (name === "Monthly") {
            newFinalAmount = parseFloat(value) * 12
        }
        setFormData(prevData => {
            return{
                ...prevData,
                [name]: value,
                finalAmount : newFinalAmount
            }
        } )
    }
    //Amount invested × ({[1 + Periodic rate of interest] Total number payments – 1} / Periodic rate of interest) × (1 + Periodic rate of interest).

    function handleSubmit(event) {
        event.preventDefault()

        // const formData = new FormData(event.target);
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Monthly SIP "
            onChange={onHandle}
            name = "Monthly"
            value = {formData.Monthly}
        />
        <input
            type="text"
            placeholder="Expected return yearly "
            onChange={onHandle}
            name = "Return"
            value = {formData.Return}
        />
        <input
            type="text"
            placeholder="Time Period"
            onChange={onHandle}
            name = "Time"
            value = {formData.Time}
        />
        <button type="submit">Submit</button>
        {<FinalAmount formData={formData} />}
        </form>
    );
}