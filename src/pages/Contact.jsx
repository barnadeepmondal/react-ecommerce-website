import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Get in Touch</h1>
        <p className="text-gray-500">Any questions or feedback? Just drop us a message!</p>
        <div className="w-16 h-1 bg-pink-600 mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side: Contact Info Cards */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4">
            <span className="text-2xl">📍</span>
            <div>
              <h3 className="font-semibold text-gray-800">Our Location</h3>
              <p className="text-gray-600 text-sm mt-1">123 E-Commerce St, Tech Suite 404, India</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4">
            <span className="text-2xl">📞</span>
            <div>
              <h3 className="font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600 text-sm mt-1">+91 98765 43210</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4">
            <span className="text-2xl">✉️</span>
            <div>
              <h3 className="font-semibold text-gray-800">Email Support</h3>
              <p className="text-gray-600 text-sm mt-1">support@ecommerce.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Contact Form */}
        <div className="md:col-span-2 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="johndoe@example.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;