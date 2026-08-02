export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          Đăng nhập
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Đăng nhập để sử dụng dịch vụ
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Nhập email"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Mật khẩu
            </label>

            <input
              type="password"
              placeholder="Nhập mật khẩu"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Đăng nhập
          </button>

        </form>

        <p className="text-center mt-6">
          Chưa có tài khoản?

          <a
            href="/register"
            className="text-blue-600 ml-2 font-bold"
          >
            Đăng ký
          </a>

        </p>

      </div>

    </main>
  );
}
