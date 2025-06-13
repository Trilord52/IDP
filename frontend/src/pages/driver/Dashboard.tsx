import { useState } from 'react';

interface Delivery {
  id: string;
  orderId: string;
  restaurantName: string;
  customerName: string;
  customerAddress: string;
  status: 'PENDING' | 'PICKED_UP' | 'DELIVERED';
  items: {
    name: string;
    quantity: number;
  }[];
  total: number;
}

// Static delivery data
const initialDeliveries: Delivery[] = [
  {
    id: '1',
    orderId: 'ORD-001',
    restaurantName: 'KK Green',
    customerName: 'John Doe',
    customerAddress: '123 Main St, City',
    status: 'PENDING',
    items: [
      { name: 'Classic Burger', quantity: 2 },
      { name: 'French Fries', quantity: 1 }
    ],
    total: 22.97
  },
  {
    id: '2',
    orderId: 'ORD-002',
    restaurantName: 'Sew Sabi',
    customerName: 'Jane Smith',
    customerAddress: '456 Oak Ave, Town',
    status: 'PICKED_UP',
    items: [
      { name: 'Butter Chicken', quantity: 1 },
      { name: 'Naan Bread', quantity: 2 }
    ],
    total: 22.97
  },
  {
    id: '3',
    orderId: 'ORD-003',
    restaurantName: 'Kibnesh',
    customerName: 'Mike Johnson',
    customerAddress: '789 Pine Rd, Village',
    status: 'DELIVERED',
    items: [
      { name: 'Margherita Pizza', quantity: 1 },
      { name: 'Pasta Carbonara', quantity: 1 }
    ],
    total: 26.98
  }
];

export default function DriverDashboard() {
  const [deliveries, setDeliveries] = useState<Delivery[]>(initialDeliveries);
  const [selectedDelivery, setSelectedDelivery] = useState<Delivery | null>(null);

  const updateDeliveryStatus = (deliveryId: string, newStatus: Delivery['status']) => {
    setDeliveries(prevDeliveries =>
      prevDeliveries.map(delivery =>
        delivery.id === deliveryId
          ? { ...delivery, status: newStatus }
          : delivery
      )
    );
  };

  const getStatusColor = (status: Delivery['status']) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'PICKED_UP':
        return 'bg-blue-100 text-blue-800';
      case 'DELIVERED':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">delivery boy dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Deliveries List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Active Deliveries</h2>
          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <div
                key={delivery.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedDelivery(delivery)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Order #{delivery.orderId}</h3>
                    <p className="text-gray-600">{delivery.restaurantName}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(delivery.status)}`}>
                    {delivery.status.replace('_', ' ')}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Customer: {delivery.customerName}</p>
                  <p>Address: {delivery.customerAddress}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Details */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Delivery Details</h2>
          {selectedDelivery ? (
            <div>
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Order Information</h3>
                <p className="text-gray-600">Order ID: {selectedDelivery.orderId}</p>
                <p className="text-gray-600">Restaurant: {selectedDelivery.restaurantName}</p>
                <p className="text-gray-600">Total: ${selectedDelivery.total.toFixed(2)}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Customer Information</h3>
                <p className="text-gray-600">Name: {selectedDelivery.customerName}</p>
                <p className="text-gray-600">Address: {selectedDelivery.customerAddress}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Order Items</h3>
                <div className="space-y-2">
                  {selectedDelivery.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-gray-600">
                      <span>{item.name}</span>
                      <span>x{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg mb-2">Update Status</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => updateDeliveryStatus(selectedDelivery.id, 'PENDING')}
                    className={`px-4 py-2 rounded ${
                      selectedDelivery.status === 'PENDING'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => updateDeliveryStatus(selectedDelivery.id, 'PICKED_UP')}
                    className={`px-4 py-2 rounded ${
                      selectedDelivery.status === 'PICKED_UP'
                        ? 'bg-blue-500 text-white'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    Picked Up
                  </button>
                  <button
                    onClick={() => updateDeliveryStatus(selectedDelivery.id, 'DELIVERED')}
                    className={`px-4 py-2 rounded ${
                      selectedDelivery.status === 'DELIVERED'
                        ? 'bg-green-500 text-white'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    Delivered
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Select a delivery to view details</p>
          )}
        </div>
      </div>
    </div>
  );
} 