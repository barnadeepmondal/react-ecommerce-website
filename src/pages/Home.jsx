import { useContext } from "react";
import HeroSection from "../Components/HeroSection";
import Card from "../Components/Card";
import ProductContext from "../ProductContext/productcontext";
import { Link } from "react-router-dom"; // Import Link for routing

const Home = () => {
  const { product } = useContext(ProductContext);

  // Take only the first 4 products to showcase as "Trending/Featured" on the Home Page
  const featuredProducts = product ? product.slice(0, 4) : [];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Main Banner Hero Section */}
      <HeroSection />

      {/* 2. Value Proposition / Features Section */}
      <div className="bg-gray-50 border-y border-gray-100 py-10 my-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <span className="text-3xl">🚚</span>
            <h3 className="font-semibold text-gray-800 mt-2">Free Shipping</h3>
            <p className="text-xs text-gray-500 mt-1">On all orders over ₹499</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <span className="text-3xl">🔒</span>
            <h3 className="font-semibold text-gray-800 mt-2">Secure Payments</h3>
            <p className="text-xs text-gray-500 mt-1">100% protected checkout</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <span className="text-3xl">🔄</span>
            <h3 className="font-semibold text-gray-800 mt-2">Easy Returns</h3>
            <p className="text-xs text-gray-500 mt-1">30-day hassle-free return policy</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <span className="text-3xl">💬</span>
            <h3 className="font-semibold text-gray-800 mt-2">24/7 Support</h3>
            <p className="text-xs text-gray-500 mt-1">Dedicated customer care team</p>
          </div>
        </div>
      </div>

      {/* 3. Featured Products Grid (Limited Items) */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Trending This Week</h2>
            <p className="text-sm text-gray-500 mt-1">Check out our top-selling beauty arrivals</p>
          </div>
          {/* A button directing them to the complete catalog page */}
          <Link
            to="/products"
            className="group flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200"
          >
            View Full Collection <span>&rarr;</span>
          </Link>
        </div>

        {/* 4-Item Premium Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((item) => (
            <div key={item.id} className="transition-all duration-300 hover:scale-[1.01]">
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Catchy Mid-Page Promo Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl text-white px-8 py-12 sm:px-12 sm:py-16 shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="bg-white/20 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full">Limited Offer</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4">Get Up To 50% Off On Premium Lipsticks</h2>
            <p className="mt-2 text-pink-100 text-sm">Upgrade your cosmetics game today. Offer ends this weekend!</p>
          </div>
          <Link 
            to="/products" 
            className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-xl hover:bg-pink-50 transition-colors shadow-sm whitespace-nowrap active:scale-[0.98]"
          >
            Shop Sale Now
          </Link>
          {/* Abstract floating design circle elements */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;