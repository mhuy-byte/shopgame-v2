export default function NapGame() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-blue-700 text-white py-5 shadow">

        <h1 className="text-center text-3xl font-bold">
          Tạo đơn nạp game
        </h1>

      </header>

      <div className="max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Thông tin đơn hàng
        </h2>

        {/* Game */}

        <label className="font-semibold">
          Chọn game
        </label>

        <select className="w-full border rounded-lg p-3 mt-2 mb-5">

          <option>Free Fire</option>

          <option>Liên Quân Mobile</option>

          <option>PUBG Mobile</option>

        </select>

        {/* UID */}

        <label className="font-semibold">
          UID / ID Game
        </label>

        <input
          className="w-full border rounded-lg p-3 mt-2 mb-5"
          placeholder="Ví dụ: 123456789"
        />

        {/* Nhân vật */}

        <label className="font-semibold">
          Tên nhân vật
        </label>

        <input
          className="w-full border rounded-lg p-3 mt-2 mb-5"
          placeholder="Nhập tên nhân vật"
        />

        {/* Gói */}

        <label className="font-semibold">
          Gói nạp
        </label>

        <select className="w-full border rounded-lg p-3 mt-2 mb-8">

          <option>20.000 VNĐ</option>

          <option>50.000 VNĐ</option>

          <option>100.000 VNĐ</option>

          <option>200.000 VNĐ</option>

          <option>500.000 VNĐ</option>

        </select>

        <button
          className="w-full bg-blue-700 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-800"
        >
          Tạo đơn hàng
        </button>

      </div>

    </main>
  );
}
