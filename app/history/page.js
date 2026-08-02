export default function History() {
  return (
    <main className="min-h-screen bg-gray-100">

      <header className="bg-blue-700 text-white p-5">
        <h1 className="text-3xl font-bold text-center">
          Lịch sử nạp game
        </h1>
      </header>

      <div className="max-w-5xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-6">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left p-3">Game</th>
              <th className="text-left p-3">Mệnh giá</th>
              <th className="text-left p-3">Thời gian</th>
              <th className="text-left p-3">Trạng thái</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b">

              <td className="p-3">🔥 Free Fire</td>
              <td className="p-3">100.000đ</td>
              <td className="p-3">02/08/2026</td>
              <td className="p-3 text-green-600 font-bold">
                Thành công
              </td>

            </tr>

            <tr className="border-b">

              <td className="p-3">⚔️ Liên Quân</td>
              <td className="p-3">50.000đ</td>
              <td className="p-3">01/08/2026</td>
              <td className="p-3 text-yellow-600 font-bold">
                Đang xử lý
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </main>
  );
}
