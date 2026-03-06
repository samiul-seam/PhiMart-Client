import { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client";

const Order = () => {
  const [orders, setOrders] = useState([]);

  const statusClass = {
    Canceled: "bg-red-500",
    "Not Paid": "bg-secondary",
    "Ready To Ship": "bg-warning",
    Shipped: "bg-primary",
    Delivered: "bg-success",
  };

  useEffect(() => {
    authApiClient.get("/orders/").then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="mt-6 card bg-base-100 shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-lg">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.user}</td>
                  <td>
                    <div
                      className={`badge text-white ${
                        statusClass[order.status] || "bg-secondary"
                      }`}
                    >
                      {order.status}
                    </div>
                  </td>
                  <td>{order.created_at}</td>
                  <td>${order.total_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
