export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <a href="/" className="text-3xl font-bold">
          SHOPGAME
        </a>

        <nav className="hidden md:flex gap-6 font-medium">

          <a href="/" className="hover:text-yellow-300">
            Trang chủ
          </a>

          <a href="/order" className="hover:text-yellow-300">
            Nạp game
          </a>

          <a href="/history" className="hover:text-yellow-300">
            Lịch sử
          </a>

          <a href="/profile" className="hover:text-yellow-300">
            Hồ sơ
          </a>

          <a href="/admin" className="hover:text-yellow-300">
            Quản trị
          </a>

        </nav>

        <a
          href="/login"
          className="bg-white text-blue-700 px-5 py-2 rounded-lg font-bold hover:bg-yellow-300 transition"
        >
          Đăng nhập
        </a>

      </div>
    </header>
  );
}
