import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AgentPage.css";

const pastDonations = () => {
  const data = [
    {
      quantity: 300,
      description: "wertyu",
      foodType: "",
      assigned: true,
      delivered: true,
    },
    { quantity: 300, description: "", foodType: "" },
    { quantity: 300, description: "", foodType: "" },
    { quantity: 300, description: "", foodType: "" },
    { quantity: 300, description: "", foodType: "" },
    { quantity: 300, description: "", foodType: "" },
  ];

  return (
    <div className="parent1 " >
      <h1>Your Past Donations</h1>
      <div className="grid grid-cols-3 gap-4 justify-center items-center w-full mx-20">
        {data.map((item, key) => (
          <div
            key={key}
            className=" flex flex-col items-center justify-center font-serif font-medium  mx-10 min-w-[25em] rounded-xl grad"
          >
            <p>Description: {item.description}</p>
            <p>Quantity: {item.quantity}</p>
            <p className="text-base">Food-type: {item.address}</p>
            <p>Assigned:{item.assigned ? "true" : "false"}</p>
            <p>Delivered:{item.delivered ? "true" : "false"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default pastDonations;
