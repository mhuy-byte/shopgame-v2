export default function Login() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          Đăng nhập
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Quản lý tài khoản ShopGame
        </p>

        <input
          type="text"
          placeholder="Tên đăng nhập"
          className="w-full border rounded-lg p-3 mt-8"
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full border rounded-lg p-3 mt-4"
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg mt-6 hover:bg-blue-700"
        >
          Đăng nhập
        </button>

      </div>

    </main>
  );
}
