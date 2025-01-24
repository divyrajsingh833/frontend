import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // Ensure axios is properly configured

const Allorders = () => {
  const [Allorders, setAllOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/orders', {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          },
        });
        console.log('Orders fetched:', response.data); // Debug log
        setAllOrders(response.data); // Assuming response.data contains the orders
      } catch (err) {
        console.error('Error fetching orders:', err); // Debug log
        setError(err.response?.data || 'Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Handle order status change
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      console.log(orderId, newStatus);
      
      const response = await axios.patch(`/orders/status/${orderId}`,
        { status: newStatus },
        {
           headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          },
      }
      );
      console.log('Status updated:', response.data); // Debug log
      // Update local state with the new status
      setAllOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: response.data.status } : order
        )
      );
    } catch (err) {
      console.error('Error updating status:', err); // Debug log
      // setError(err.response?.data || 'Failed to update status');
    }
  };

  // Loading state
  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-center text-xl font-semibold text-red-600">{error}</div>;
  }

  return (
    <section className="py-6 px-2">
      <div className="mx-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8 text-center">
          Orders
        </h1>

        {/* Orders List */}
        <div className="overflow-x-auto">
          <table className="w-[90rem] bg-white">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-6 text-left text-md font-semibold text-blue-900">Product</th>
                <th className="py-3 px-6 text-left text-md font-semibold text-blue-900">Liters</th>
                <th className="py-3 px-6 text-left text-md font-semibold text-blue-900">Order Date</th>
                <th className="py-3 px-6 text-left text-md font-semibold text-blue-900">User</th>
                <th className="py-3 px-6 text-left text-md font-semibold text-blue-900">Phone Number</th>
                <th className="py-3 px-6 text-left text-md font-semibold text-blue-900">INR Price</th>
                <th className="py-3 px-6 text-left text-md font-semibold text-blue-900">Status</th>
                <th className="py-3 px-6 text-left text-md font-semibold text-blue-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {Allorders && Allorders.length > 0 ? (
                Allorders.map((order) => (
                  <tr key={order._id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-6">
                      <img
                        src="https://mahakumbhamritjal.com/cdn/shop/files/Gemini_Generated_Image_9llft69llft69llf_1_727cd634-615c-4b5e-896e-453a19ce8596.jpg?v=1737127632&width=1646"
                        alt="Product"
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    </td>
                    <td className="py-3 px-6 text-md">{order.liters} L</td>
                    <td className="py-3 px-6 text-md">{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 px-6 text-md">
                      {order.userId.fullname} ({order.userId.email})
                    </td>
                    <td className="py-3 px-6 text-md">{order.userId.phoneNumber}</td>
                    <td className="py-3 px-6 text-md">{order.price}</td>

                    <td className="py-3 px-6 text-md">
                      <span
                        className={`font-semibold ${
                          order.status === 'Delivered'
                            ? 'text-green-600'
                            : order.status === 'Confirmed'
                            ? 'text-yellow-600'
                            : 'text-blue-600'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      {order.status !== 'Delivered' && (
                        <button
                          onClick={() =>
                            handleStatusChange(
                              order._id,
                              order.status === 'Out of Delivery' ? 'Delivered' : 'Out of Delivery'
                            )
                          }
                          className={`px-4 py-2 rounded-lg text-white ${
                            order.status === 'Out of Delivery' ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                        >
                          Mark as {order.status === 'Out of Delivery' ? 'Delivered' : 'Out of Delivery'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="py-3 px-6 text-center text-xl font-semibold">
                    No orders found..
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Allorders;
