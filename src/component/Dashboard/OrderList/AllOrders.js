import React from "react";
import "./OrderList.css";

const AllOrders = ({ order }) => {
  return (
    <div className="orderlist-container">
      <div>
        <p>{order.name}</p>
      </div>
      <div>
        <p>{order.email}</p>
      </div>
      <div>
        <p>{order.serviceTitle}</p>
      </div>
      <div>
        <p>{order.cardBrand}</p>
      </div>
      <div>
        <p>Pending</p>
      </div>
    </div>
  );
};

export default AllOrders;
