"use client";

import { useState } from "react";

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);

    const packageName = formData.get("package");

    const prices = {
      "20.000 VNĐ": 20000,
      "50.000 VNĐ": 50000,
      "100.000 VNĐ": 100000,
      "200.000 VNĐ": 200000,
    };

    const data = {
      game: formData.get("game"),
      uid: formData.get("uid"),
      server_id: formData.get("server_id"),
      phone: formData.get("phone"),
      package_name: packageName,
      price: prices[packageName],
      status: "pending",
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setMessage(`✅ Đặt đơn thành công. Mã đơn: ${result.order.id}`);
        e.target.reset();
      } else {
        setMessage("❌ " + (result.error || "Có lỗi xảy ra."));
      }
    } catch (err) {
      setMessage("❌ Không thể kết nối tới máy chủ.");
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8 space-y-5"
    >
      <h2 className="text-2xl font-bold">
        Tạo đơn nạp game
      </h2>

      <select
        name="game"
        className="w-full border rounded-lg p-3"
      >
        <option>Free Fire</option>
        <option>Liên Quân Mobile</option>
        <option>PUBG Mobile</option>
      </select>

      <input
        name="uid"
        placeholder="UID"
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        name="server_id"
        placeholder="Server ID"
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        name="phone"
        placeholder="Số điện thoại"
        required
        className="w-full border rounded-lg p-3"
      />

      <select
        name="package"
        className="w-full border rounded-lg p-3"
      >
        <option>20.000 VNĐ</option>
        <option>50.000 VNĐ</option>
        <option>100.000 VNĐ</option>
        <option>200.000 VNĐ</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800"
      >
        {loading ? "Đang tạo đơn..." : "Tạo đơn hàng"}
      </button>

      {message && (
        <div className="font-semibold">
          {message}
        </div>
      )}
    </form>
  );
}
