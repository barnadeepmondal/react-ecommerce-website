import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Helper function to handle active page styling
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-1.5 group">
          <span className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-pink-600 transition-colors">
            Flip<span className="text-pink-600">Kart</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Products", path: "/products" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold tracking-wide transition-all duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-pink-600 after:transition-all after:duration-300 ${
                isActive(link.path)
                  ? "text-pink-600 after:w-full"
                  : "text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-bold text-gray-700 hover:text-pink-600 transition-colors px-4 py-2.5 rounded-xl hover:bg-gray-50"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
          >
            Sign up
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;