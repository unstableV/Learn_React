import React from "react";

export default function FinalAmount(props) {
    const { Monthly, Return, Time,finalAmount } = props.formData;
    return(
        <div>
      <p>Monthly: {Monthly}</p>
      <p>Return: {Return}</p>
      <p>Time: {Time}</p>
      <p>Total income: {finalAmount}</p>
    </div>
    )
}