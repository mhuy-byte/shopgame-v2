"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadOrders() {
    try {
      const res = await fetch("/api/orders");
      const result = await res.json();

      if (result.success) {
        setOrders(result.data);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadOrders();

    const interval = setInterval(loadOrders, 3000);

    return () => clearInterval(interval);
  }, []);

  function getStatus(status) {
    switch (status) {
      case "pending":
        return (
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
            Đang chờ
          </span>
        );

      case "approved":
        return (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
            Đã duyệt
          </span>
        );

      case "cancelled":
        return (
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
            Đã hủy
          </span>
        );

      default:
        return status;
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Lịch sử đơn hàng
        </h1>

        {loading ? (
          <p>Đang tải...</p>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-xl p-8 shadow">
            Chưa có đơn hàng.
          </div>
        ) : (
          <div className="space-y-5">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow p-6"
              >
                <div className="grid md:grid-cols-2 gap-4">

                  <div>
                    <p>
                      <b>Mã đơn:</b> #{order.id}
                    </p>

                    <p>
                      <b>Game:</b> {order.game}
                    </p>

                    <p>
                      <b>UID:</b> {order.uid}
                    </p>

                    <p>
                      <b>Server:</b> {order.server_id}
                    </p>
                  </div>

                  <div>
                    <p>
                      <b>Gói:</b> {order.package_name}
                    </p>

                    <p>
                      <b>Giá:</b>{" "}
                      {Number(order.price).toLocaleString("vi-VN")} VNĐ
                    </p>

                    <p>
                      <b>SĐT:</b> {order.phone}
                    </p>

                    <p className="mt-2">
                      {getStatus(order.status)}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>

    </main>
  );
}
