import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Regular Customer',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'The food delivery service is amazing! Fast delivery and always hot food. Highly recommended!'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Restaurant Owner',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    text: 'As a restaurant owner, this platform has helped us reach more customers and grow our business.'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Driver',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    text: 'Flexible hours and good earnings. The app makes it easy to manage deliveries efficiently.'
  }
];

const features = [
  {
    id: 1,
    title: 'Fast Delivery',
    description: 'Get your food delivered within 30 minutes',
    icon: '🚚'
  },
  {
    id: 2,
    title: 'Live Tracking',
    description: 'Track your order in real-time',
    icon: '📍'
  },
  {
    id: 3,
    title: 'Secure Payments',
    description: 'Multiple secure payment options',
    icon: '💳'
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Round the clock customer support',
    icon: '🛟'
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Food Delivery Made Simple
            </h1>
            <p className="text-xl mb-8">
              Order from your favorite restaurants and get it delivered to your doorstep
            </p>
            <div className="space-x-4">
              <Link
                to="/register"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers today</p>
          <Link
            to="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
} 