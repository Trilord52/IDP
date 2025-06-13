import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  deliveryFee: number;
}

export default function RestaurantList() {
  // const [restaurants, setRestaurants] = useState<Restaurant[]>();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');

  const restaurants = [
    {
      id: '1',
      name: 'kk green',
      description: 'Fast food',
      image: 'https://source.unsplash.com/400x300/?restaurant,food',
      rating: 4.5,
      cuisine: 'American',
      deliveryTime: '25-30 min',
      deliveryFee: 1.99,
    },
    {
      id: '2',
      name: 'kk yellow',
      description: 'Fast food',
      image: 'https://source.unsplash.com/400x300/?vegetarian,food',
      rating: 4.7,
      cuisine: 'Vegan',
      deliveryTime: '20-25 min',
      deliveryFee: 0.99,
    },
    {
      id: '3',
      name: 'Sew Sabi',
      description: 'Variety of food',
      image: 'https://source.unsplash.com/400x300/?indian,food',
      rating: 4.3,
      cuisine: 'Indian',
      deliveryTime: '30-35 min',
      deliveryFee: 2.49,
    },
    {
      id: '4',
      name: 'Kibnesh',
      description: 'for food and engagement',
      image: 'https://source.unsplash.com/400x300/?italian,food',
      rating: 4.6,
      cuisine: 'Italian',
      deliveryTime: '25-30 min',
      deliveryFee: 1.50,
    },
    {
      id: '5',
      name: 'Teachers lounge',
      description: 'Quick food',
      image: 'https://source.unsplash.com/400x300/?sushi,food',
      rating: 4.8,
      cuisine: 'Japanese',
      deliveryTime: '20-25 min',
      deliveryFee: 2.00,
    },
    {
      id: '6',
      name: 'Workers Lounge',
      description: 'Teraz and chill vibes',
      image: 'https://source.unsplash.com/400x300/?burger,food',
      rating: 4.4,
      cuisine: 'Fast Food',
      deliveryTime: '15-20 min',
      deliveryFee: 1.25,
    },
  ]

  // useEffect(() => {
  //   const fetchRestaurants = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/restaurants');
  //       setRestaurants(response.data);
  //     } catch (err: any) {
  //       setError(err.response?.data?.message || 'Failed to fetch restaurants');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchRestaurants();
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  //         <span className="block sm:inline">{error}</span>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Restaurants</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/restaurants/${restaurant.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                ⭐ {restaurant.rating.toFixed(1)}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {restaurant.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{restaurant.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{restaurant.cuisine}</span>
                <span>•</span>
                <span>{restaurant.deliveryTime}</span>
                <span>•</span>
                <span>Delivery: ${restaurant.deliveryFee.toFixed(2)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {restaurants.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No restaurants found.</p>
        </div>
      )}
    </div>
  );
} 