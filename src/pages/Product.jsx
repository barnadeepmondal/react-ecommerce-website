import { useState, useContext } from "react"; // 1. Added useContext here
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import ProductContext from "../productContext/productContext"; // 2. Imported your Context

const Product = () => {
  // 3. Pull the data from Context directly, just like your Home page!
  const { product } = useContext(ProductContext); 
  
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // If context data hasn't loaded yet, show a clean loading indicator
  if (!product || product.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading your beautiful collection...</p>
        </div>
      </div>
    );
  }

  // Extract unique categories dynamically
  const categories = ["all", ...new Set(product.map((item) => item.category || "Beauty"))];

  // Filter products based on selected category
  const filteredProducts = product.filter((item) => {
    if (selectedCategory === "all") return true;
    return (item.category || "Beauty").toLowerCase() === selectedCategory.toLowerCase();
  });

  // Sort products based on dropdown selection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "low-to-high") return a.price - b.price;
    if (sortBy === "high-to-low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-5 mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Our Collections</h1>
            <p className="mt-1 text-sm text-gray-500">
              Showing {sortedProducts.length} premium products tailored for you.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Category Filter Pills */}
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm ${
                    selectedCategory === cat
                      ? "bg-pink-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
              <span className="text-xs text-gray-500 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-semibold text-gray-700 bg-transparent outline-none cursor-pointer"
              >
                <option value="default">Featured</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Display Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((item) => (
            <div 
              key={item.id} 
              className="transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-md rounded-2xl bg-white overflow-hidden"
            >
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;