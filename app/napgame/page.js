export default function NapGame() {
  return (
    <main className="min-h-screen bg-gray-100">

      <header className="bg-blue-700 text-white p-5">
        <h1 className="text-3xl font-bold text-center">
          Nạp Game
        </h1>
      </header>

      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10">

        <label className="block font-bold mb-2">
          Chọn game
        </label>

        <select className="w-full border rounded-lg p-3 mb-5">
          <option>Free Fire</option>
          <option>Liên Quân Mobile</option>
          <option>PUBG Mobile</option>
        </select>

        <label className="block font-bold mb-2">
          ID Game
        </label>

        <input
          type="text"
          placeholder="Nhập ID game"
          className="w-full border rounded-lg p-3 mb-5"
        />

        <label className="block font-bold mb-2">
          Mệnh giá
        </label>

        <select className="w-full border rounded-lg p-3 mb-6">
          <option>20.000đ</option>
          <option>50.000đ</option>
          <option>100.000đ</option>
          <option>200.000đ</option>
          <option>500.000đ</option>
        </select>

        <button className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700">
          Tiếp tục thanh toán
        </button>

      </div>

    </main>
  );
}
