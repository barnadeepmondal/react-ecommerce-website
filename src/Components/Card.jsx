

const Card = ({
  title,
  description,
  price,
  discountPercentage,
  category,
  thumbnail,
}) => {

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="relative overflow-hidden h-64">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          loading="lazy"
        />

        <span className="absolute top-4 left-4 bg-pink-500 text-white text-sm px-4 py-1 rounded-full font-semibold shadow-md">
          {discountPercentage}%
        </span>

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
          <button className="bg-white text-pink-500 px-5 py-2 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition duration-300">
            View
          </button>

          <button className="bg-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-600 transition duration-300">
            Cart
          </button>
        </div>
      </div>

      <div className="p-5">
        <p className="text-pink-500 font-semibold text-sm uppercase tracking-wider mb-2">
          {category}
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>

        <p className="text-gray-700 text-base leading-relaxed mb-5">
          {description.slice(0, 100)}....
        </p>

        <div className="flex items-center justify-between mb-5">
          <div>
            <span className="text-3xl font-bold text-pink-500">₹{price}</span>
            <span className="text-gray-400 line-through ml-2">
              ₹{price + (price * discountPercentage) / 100}
            </span>
          </div>

          <div className="flex items-center gap-1 text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>
        </div>

        <button
          className="w-full py-3 bg-pink-500 text-white rounded-xl font-semibold text-lg hover:bg-pink-600 transition duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;