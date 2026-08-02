export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">

      <header className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-6xl mx-auto p-5 flex justify-between items-center">

          <h1 className="text-3xl font-bold">
            SHOPGAME
          </h1>

          <nav className="space-x-6">

            <a href="/">
              Trang chủ
            </a>

            <a href="/history">
              Lịch sử
            </a>

            <a href="/admin">
              Quản trị
            </a>

          </nav>

        </div>
      </header>


      <section className="max-w-6xl mx-auto py-16 text-center">

        <h2 className="text-5xl font-bold text-blue-700">
          Shop Nạp Game
        </h2>

        <p className="mt-5 text-gray-600 text-xl">
          Nạp game nhanh • Uy tín • Tự động
        </p>

      </section>


      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 pb-20 px-5">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h3 className="text-2xl font-bold">
            🔥 Free Fire
          </h3>

          <p className="mt-3">
            Nạp Kim Cương
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h3 className="text-2xl font-bold">
            ⚔️ Liên Quân
          </h3>

          <p className="mt-3">
            Nạp Quân Huy
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h3 className="text-2xl font-bold">
            🎮 PUBG Mobile
          </h3>

          <p className="mt-3">
            Nạp UC
          </p>

        </div>

      </section>

    </main>
  );
}
