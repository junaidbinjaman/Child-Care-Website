import React from "react";

const UserOrders = ({ order }) => {
  console.log(order);
  return (
    <div>
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
    </div>
  );
};

export default UserOrders;
