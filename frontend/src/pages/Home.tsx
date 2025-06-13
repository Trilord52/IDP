import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Yohannes',
    role: 'Food Enthusiast',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    text: 'The delivery service is incredible! My food always arrives hot and fresh. The app makes ordering so convenient!'
  },
  {
    id: 2,
    name: 'Miki Yafet',
    role: 'Regular Customer',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    text: 'I love the variety of restaurants available. The real-time tracking feature is a game-changer!'
  },
  {
    id: 3,
    name: 'Tinbite Yonas',
    role: 'Busy Professional',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    text: 'Perfect for my busy schedule. The delivery is always on time and the food quality is consistently excellent.'
  }
];

const stats = [
  { id: 1, number: '10K+', label: 'Happy Customers' },
  { id: 2, number: '500+', label: 'Restaurant Partners' },
  { id: 3, number: '50K+', label: 'Deliveries Completed' },
  { id: 4, number: '4.8', label: 'Average Rating' }
];

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' }
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Safety Center', href: '/safety' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Terms of Service', href: '/terms' }
  ],
  social: [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'LinkedIn', href: '#', icon: '💼' }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Delicious Food Delivered to Your Doorstep
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Order from your favorite restaurants and get your food delivered quickly and safely.
            </p>
            <div className="space-x-4">
              <Link
                to="/restaurants"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Browse Restaurants
              </Link>
              <Link
                to="/register"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <div className="text-blue-600 text-5xl mb-6">🚚</div>
              <h3 className="text-2xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-600 text-lg">
                Get your food delivered quickly by our reliable delivery partners.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <div className="text-blue-600 text-5xl mb-6">🍽️</div>
              <h3 className="text-2xl font-semibold mb-4">Wide Selection</h3>
              <p className="text-gray-600 text-lg">
                Choose from hundreds of restaurants and thousands of dishes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
              <div className="text-blue-600 text-5xl mb-6">💳</div>
              <h3 className="text-2xl font-semibold mb-4">Easy Payment</h3>
              <p className="text-gray-600 text-lg">
                Pay securely online or in cash when your order arrives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="text-center transform hover:scale-105 transition-all">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Restaurant</h3>
              <p className="text-gray-600 text-lg">Browse and select from our partner restaurants</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Select Food</h3>
              <p className="text-gray-600 text-lg">Choose your favorite dishes from the menu</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Place Order</h3>
              <p className="text-gray-600 text-lg">Pay securely and confirm your order</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600 text-lg">Get your food delivered to your doorstep</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-4 border-blue-100"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of satisfied customers today</p>
          <Link
            to="/register"
            className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            Sign Up Now
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download App Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get Our Mobile App</h2>
            <p className="text-xl text-gray-600 mb-8">
              Download our app for a better experience. Track your delivery in real-time, get exclusive offers, and more!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <span className="text-2xl mr-2">🍎</span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <span className="text-2xl mr-2">🤖</span>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">FoodDelivery</h3>
              <p className="text-gray-400 mb-4">
                Delivering happiness to your doorstep with the best food delivery service.
              </p>
              <div className="flex space-x-4">
                {footerLinks.social.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="text-2xl">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 FoodDelivery. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 