"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ManagerPage() {
  const router = useRouter();

  useEffect(() => {
    const logged = localStorage.getItem("admin-login");

    if (logged !== "true") {
      router.push("/admin-login");
    }
  }, [router]);

  function logout() {
    localStorage.removeItem("admin-login");
    router.push("/admin-login");
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <header className="bg-blue-700 text-white p-5 shadow-lg flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          SHOPGAME ADMIN
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Đăng xuất
        </button>

      </header>

      <div className="max-w-7xl mx-auto py-10 px-5">

        <h2 className="text-3xl font-bold mb-6">
          Danh sách đơn hàng
        </h2>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="p-3">ID</th>
                <th className="p-3">Game</th>
                <th className="p-3">UID</th>
                <th className="p-3">Server</th>
                <th className="p-3">Giá</th>
                <th className="p-3">Trạng thái</th>
                <th className="p-3">Thao tác</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="p-3 text-center">-</td>
                <td className="p-3 text-center">-</td>
                <td className="p-3 text-center">-</td>
                <td className="p-3 text-center">-</td>
                <td className="p-3 text-center">-</td>
                <td className="p-3 text-center">
                  Chưa có dữ liệu
                </td>

                <td className="p-3 text-center">

                  <button className="bg-green-600 text-white px-3 py-2 rounded mr-2">
                    Duyệt
                  </button>

                  <button className="bg-yellow-500 text-white px-3 py-2 rounded mr-2">
                    Hủy
                  </button>

                  <button className="bg-red-600 text-white px-3 py-2 rounded">
                    Xóa
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}
