export default function Admin() {
  return (
    <main className="min-h-screen bg-gray-100">

      <header className="bg-red-600 text-white p-5">
        <h1 className="text-3xl font-bold text-center">
          Trang Quản Trị
        </h1>
      </header>

      <div className="max-w-6xl mx-auto py-10">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">
              👤 Người dùng
            </h2>

            <p className="mt-3 text-3xl font-bold text-blue-600">
              0
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">
              💳 Đơn nạp
            </h2>

            <p className="mt-3 text-3xl font-bold text-green-600">
              0
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">
              🎮 Game
            </h2>

            <p className="mt-3 text-3xl font-bold text-orange-500">
              3
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">
              💰 Doanh thu
            </h2>

            <p className="mt-3 text-3xl font-bold text-red-500">
              0đ
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}
