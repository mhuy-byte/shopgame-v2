"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (
      username === "admin" &&
      password === "shopgame@2026"
    ) {
      localStorage.setItem("admin-login", "true");
      router.push("/manager-2026");
    } else {
      setError("Sai tên đăng nhập hoặc mật khẩu.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          SHOPGAME ADMIN
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Đăng nhập quản trị
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
          >
            Đăng nhập
          </button>

          {error && (
            <p className="text-red-600 text-center">
              {error}
            </p>
          )}

        </form>

      </div>

    </main>
  );
}
