"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          phone,
          password,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setMessage("✅ Đăng ký thành công!");

        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else {
        setMessage("❌ " + result.error);
      }
    } catch (err) {
      setMessage("❌ Không thể kết nối tới máy chủ.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-8">
          Đăng ký tài khoản
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Tên tài khoản"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border rounded-lg p-3"
          />

          <button
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-lg p-3 font-bold"
          >
            {loading ? "Đang đăng ký..." : "Đăng ký"}
          </button>

        </form>

        {message && (
          <div className="mt-5 text-center font-semibold">
            {message}
          </div>
        )}

      </div>

    </main>
  );
}
