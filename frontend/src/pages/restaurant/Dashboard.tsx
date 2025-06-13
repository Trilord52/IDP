import { useState, useEffect } from 'react';
import { MenuItem, restaurantMenus, addMenuItem } from '../../data/restaurantData';

interface Order {
  id: string;
  status: string;
  items: MenuItem[];
  total: number;
}

export default function RestaurantDashboard() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newMenuItem, setNewMenuItem] = useState({
    name: '',
    description: '',
    price: '',
    category: 'MAIN',
    image: 'https://source.unsplash.com/400x300/?food'
  });

  useEffect(() => {
    // For testing, we'll use restaurant ID 1
    const restaurantId = '1';
    setMenu(restaurantMenus[restaurantId] || []);
    setLoading(false);
  }, []);

  const handleAddMenuItem = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const restaurantId = '1'; // For testing, we'll use a hardcoded ID
      const newItem = addMenuItem(restaurantId, {
        ...newMenuItem,
        price: parseFloat(newMenuItem.price)
      });
      
      setMenu(prevMenu => [...prevMenu, newItem]);
      setNewMenuItem({
        name: '',
        description: '',
        price: '',
        category: 'MAIN',
        image: 'https://source.unsplash.com/400x300/?food'
      });
      
      // Close the modal
      document.getElementById('addMenuItemModal')?.classList.add('hidden');
    } catch (err) {
      console.error('Error adding menu item:', err);
      setError('Failed to add menu item');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Restaurant Dashboard</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Menu Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Menu</h2>
            <button 
              onClick={() => document.getElementById('addMenuItemModal')?.classList.remove('hidden')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Item
            </button>
          </div>
          <div className="space-y-4">
            {menu.map((item) => (
              <div key={item.id} className="border rounded p-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-blue-600 font-semibold">${item.price.toFixed(2)}</p>
                    <span className="text-sm text-gray-500">Category: {item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orders Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {orders.length === 0 ? (
              <p className="text-gray-500">No orders yet</p>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="border rounded p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Order #{order.id}</span>
                    <select
                      value={order.status}
                      onChange={(e) => {
                        setOrders(prevOrders =>
                          prevOrders.map(o =>
                            o.id === order.id ? { ...o, status: e.target.value } : o
                          )
                        );
                      }}
                      className="border rounded px-2 py-1"
                    >
                      <option value="PENDING">Pending</option>
                      <option value="PREPARING">Preparing</option>
                      <option value="READY">Ready</option>
                      <option value="DELIVERED">Delivered</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="text-sm text-gray-600">
                        {item.name} - ${item.price.toFixed(2)}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-right font-semibold">
                    Total: ${order.total.toFixed(2)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Add Menu Item Modal */}
      <div id="addMenuItemModal" className="fixed inset-0 bg-black bg-opacity-50 hidden">
        <div className="bg-white rounded-lg p-6 max-w-md mx-auto mt-20">
          <h3 className="text-xl font-semibold mb-4">Add Menu Item</h3>
          <form onSubmit={handleAddMenuItem}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={newMenuItem.name}
                onChange={(e) => setNewMenuItem({...newMenuItem, name: e.target.value})}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                value={newMenuItem.description}
                onChange={(e) => setNewMenuItem({...newMenuItem, description: e.target.value})}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Price</label>
              <input
                type="number"
                step="0.01"
                value={newMenuItem.price}
                onChange={(e) => setNewMenuItem({...newMenuItem, price: e.target.value})}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Category</label>
              <select
                value={newMenuItem.category}
                onChange={(e) => setNewMenuItem({...newMenuItem, category: e.target.value})}
                className="w-full border rounded px-3 py-2"
              >
                <option value="APPETIZER">Appetizer</option>
                <option value="MAIN">Main Course</option>
                <option value="DESSERT">Dessert</option>
                <option value="BEVERAGE">Beverage</option>
                <option value="SIDE">Side Dish</option>
              </select>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => document.getElementById('addMenuItemModal')?.classList.add('hidden')}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 