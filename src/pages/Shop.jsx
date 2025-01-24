import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"; // Adjust the path based on your project structure
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [quantity, setQuantity] = useState(1); // Default quantity is 1 liter
  const [confirmOrderDialog, setConfirmOrderDialog] = useState(false); // Confirmation dialog state
  const [orderSuccess, setOrderSuccess] = useState(false); // Order success state
  const pricePerLiter = 298; // Price per liter

  const navigate = useNavigate();

  const handleQuantityChange = (qty) => {
    setQuantity(qty);
  };

  const handleIncrement = () => {
    if (quantity < 100) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOrder = async () => {
    try {
      const response = await axios.post(
        "/orders",
        { liters: quantity },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      );

      if (response.status === 201) {
        setOrderSuccess(true); // Show success dialog
      } else {
        throw new Error("Failed to place the order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    } finally {
      setConfirmOrderDialog(false); // Close confirmation dialog
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://mahakumbhamritjal.com/cdn/shop/files/Gemini_Generated_Image_9llft69llft69llf_1_727cd634-615c-4b5e-896e-453a19ce8596.jpg?v=1737127632&width=1646"
            alt="Ganga Jal"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">
            Mahakumbh Ganga Jal
          </h2>
          <p className="text-md text-blue-700 mb-6">
            Sourced directly from the holy Ganges River, this 500ml bottle is the epitome of purity and divine blessings.
          </p>

          {/* Price */}
          <div className="text-3xl font-semibold text-blue-800 mb-6">
            <span className="line-through">₹499</span> ₹{pricePerLiter * quantity}
          </div>

          {/* Quantity Selection */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-blue-900 mb-2">Select Quantity</h3>
            <div className="flex items-center gap-6">
              <button
                onClick={handleDecrement}
                className="bg-gray-200 p-3 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                -
              </button>
              <span className="text-2xl font-semibold text-blue-900">{quantity}L</span>
              <button
                onClick={handleIncrement}
                className="bg-gray-200 p-3 rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Buy Now */}
          <button
            onClick={() => setConfirmOrderDialog(true)} // Open confirmation dialog
            className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={confirmOrderDialog} onOpenChange={setConfirmOrderDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Order</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to place an order for {quantity}L of Mahakumbh Ganga Jal? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setConfirmOrderDialog(false)}>
              Cancel
            </AlertDialogAction>
            <AlertDialogAction onClick={handleOrder}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Order Success Dialog */}
      <AlertDialog open={orderSuccess} onOpenChange={setOrderSuccess}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Order Confirmed</AlertDialogTitle>
            <AlertDialogDescription>
              Your order for {quantity}L of Mahakumbh Ganga Jal has been successfully placed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setOrderSuccess(false)}>
              Close
            </AlertDialogAction>
            <AlertDialogAction onClick={() => navigate("/orders")}>
              Go to orders
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default Shop;
