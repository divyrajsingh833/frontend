import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // Make sure the axios instance is correctly set up

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const fetchOrders = async () => {
      try {
        
        const response = await axios.get('/orders/loggedinuser',{
          headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
          },

        });  // API endpoint for orders
        setOrders(response.data);  // Assuming the response contains the orders
        
      } catch (err) {       
        setError(err.response.data);  // Set an error message if the request fails
      } finally {
        setLoading(false);  // Set loading to false once the request is complete
      }
    };

    fetchOrders(); // Call the function to fetch orders
  }, []);  // Empty dependency array means this will run once when the component mounts

  // Render loading, error, or orders
  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl font-semibold text-black-600">{error}</div>;
  }

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8 text-center">
          Orders
        </h1>

        {/* Orders List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id} className="bg-white p-6 rounded-lg shadow-md transition duration-300">
                {/* Product Image */}
                <img
                  src="https://mahakumbhamritjal.com/cdn/shop/files/Gemini_Generated_Image_9llft69llft69llf_1_727cd634-615c-4b5e-896e-453a19ce8596.jpg?v=1737127632&width=1646"
                  alt={order.title}
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />

                {/* Order Details */}
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Mahakumbh Ganga jal ({order.liters}/L)</h3>
                <p className="text-lg text-blue-700 mb-4">₹{order.price}</p>
                <p className="text-sm  mb-4">
                  <strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
                </p>
                <div
                  className={`text-sm font-semibold ${
                    order.status =='Delivered'
                      ? 'text-green-600'
                      : order.status === 'Out of Delivery'
                      ? 'text-blue-600'
                      : 'text-yellow-600'
                  }`}
                >
                  <strong className='text-black'>Status:</strong> {order.status}
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center w-full text-xl mt-10 font-semibold">
              <span>No orders found..</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Orders;
