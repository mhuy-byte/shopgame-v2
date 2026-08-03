import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

          <h1 className="text-3xl font-bold">
            SHOPGAME
          </h1>

          <nav className="space-x-6">
            <a href="/">Trang chủ</a>
            <a href="/history">Lịch sử</a>
            <a href="/admin">Quản trị</a>
          </nav>

        </div>
      </header>

      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            SHOP NẠP GAME
          </h2>

          <p className="mt-5 text-xl">
            Nạp game nhanh • Tự động • Uy tín • Giá rẻ
          </p>

        </div>
      </section>

      {/* Danh sách game */}
      <section className="max-w-6xl mx-auto py-16 px-5">

        <h2 className="text-4xl font-bold text-center mb-10">
          Danh sách game
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold">
              🔥 Free Fire
            </h3>

            <p className="mt-3 text-gray-600">
              Nạp Kim Cương tự động
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold">
              ⚔️ Liên Quân Mobile
            </h3>

            <p className="mt-3 text-gray-600">
              Nạp Quân Huy siêu tốc
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold">
              🎮 PUBG Mobile
            </h3>

            <p className="mt-3 text-gray-600">
              Nạp UC chính hãng
            </p>

          </div>

        </div>

      </section>

      {/* FORM ĐẶT ĐƠN */}
      <section className="max-w-3xl mx-auto px-5 pb-20">

        <OrderForm />

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">

        <div className="text-center">

          <h3 className="text-2xl font-bold">
            SHOPGAME
          </h3>

          <p className="mt-3 text-gray-400">
            © 2026 ShopGame
          </p>

        </div>

      </footer>

    </main>
  );
}
