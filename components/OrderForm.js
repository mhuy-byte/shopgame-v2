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

    const data = {
      game: formData.get("game"),
      uid: formData.get("uid"),
      playerName: formData.get("playerName"),
      package: formData.get("package"),
    };

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    setLoading(false);

    if (result.success) {
      setMessage(
        `✅ Tạo đơn thành công: ${result.order.id}`
      );
      e.target.reset();
    } else {
      setMessage("❌ Có lỗi xảy ra.");
    }
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
        className="w-full border rounded-lg p-3"
      />

      <input
        name="playerName"
        placeholder="Tên nhân vật"
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
        disabled={loading}
        className="w-full bg-blue-700 text-white p-3 rounded-lg"
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
