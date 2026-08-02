export default function GameCard({
  title,
  description,
  image,
  buttonText = "Nạp ngay",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <button
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>

      </div>

    </div>
  );
}
