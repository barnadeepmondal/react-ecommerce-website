import { Link } from "react-router-dom"; // Ensure react-router-dom is installed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            E-<span className="text-pink-500">Shop</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your ultimate destination for premium beauty and lifestyle products. We bring high-quality fashion right to your doorstep.
          </p>
          {/* Social Icons Placeholder */}
          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-pink-500 transition-colors text-xl">🌐</a>
            <a href="#" className="hover:text-pink-500 transition-colors text-xl">📸</a>
            <a href="#" className="hover:text-pink-500 transition-colors text-xl">🐦</a>
            <a href="#" className="hover:text-pink-500 transition-colors text-xl">💼</a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg border-b border-gray-800 pb-2">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-pink-500 transition-colors">Products</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-500 transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg border-b border-gray-800 pb-2">Customer Care</h3>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li><a href="#" className="hover:text-pink-500 transition-colors">FAQ & Help</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg border-b border-gray-800 pb-2">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Subscribe to receive inspiration, ideas, and news in your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 text-sm"
              required
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-200 shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;