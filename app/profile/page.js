export default function Profile() {
  return (
    <main className="min-h-screen bg-gray-100">

      <header className="bg-blue-700 text-white p-5">
        <h1 className="text-3xl font-bold text-center">
          Hồ sơ tài khoản
        </h1>
      </header>

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10">

        <p><strong>Tên:</strong> Người dùng</p>

        <p className="mt-4">
          <strong>Email:</strong> user@gmail.com
        </p>

        <p className="mt-4">
          <strong>Số dư:</strong> 0đ
        </p>

        <button className="mt-8 w-full bg-red-600 text-white rounded-lg p-3 hover:bg-red-700">
          Đăng xuất
        </button>

      </div>

    </main>
  );
}
