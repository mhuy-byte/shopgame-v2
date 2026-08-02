export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold">SHOPGAME</h2>
          <p className="mt-3 text-gray-300">
            Hệ thống nạp game tự động, nhanh chóng, an toàn và uy tín.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Liên kết</h3>

          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Trang chủ
              </a>
            </li>

            <li>
              <a href="/order" className="hover:text-yellow-400">
                Nạp game
              </a>
            </li>

            <li>
              <a href="/history" className="hover:text-yellow-400">
                Lịch sử
              </a>
            </li>

            <li>
              <a href="/login" className="hover:text-yellow-400">
                Đăng nhập
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Liên hệ</h3>

          <p>Email: support@shopgame.vn</p>
          <p>Zalo: 0123 456 789</p>
          <p>Facebook: ShopGame</p>
        </div>

      </div>

      <div className="border-t border-slate-700 py-4 text-center text-gray-400">
        © 2026 SHOPGAME. All rights reserved.
      </div>
    </footer>
  );
}
