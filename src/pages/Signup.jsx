import { Link, useNavigate } from "react-router-dom";
import Navbar from '@/components/shared/Navbar';
import { useForm } from "react-hook-form";
import axios from "../api/axios";
import { toast } from "sonner";

function Signup() {

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  async function getSignup(data) {
    try {
      const response = await axios.post('/user/signup', data);
      if (response.status == 201) {
        reset();
        navigate("/login");
        toast.success("Signup successfull, Please login");
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  }

  return (
    <>
      <div className="mt-16 flex justify-center items-center">
        <form
          className="bg-white p-6 rounded-lg shadow-md w-full sm:w-[40rem]"
          onSubmit={handleSubmit(getSignup)}
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Register</h2>

          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-gray-600 font-medium mb-2">Full Name</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              {...register("fullname", { required: "Full Name is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              {...register("email", { required: "Email is required", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email format" } })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-600 font-medium mb-2">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              maxLength={10}
              type="tel"
              {...register("phoneNumber", { 
                required: "Phone number is required", 
                pattern: { value: /^[0-9]{10}$/, message: "Phone number must be 10 digits" }
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-600 font-medium mb-2">Address</label>
            <textarea
              id="address"
              name="address"
              {...register("address", { required: "Address is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          {/* Pincode */}
          <div className="mb-4">
            <label htmlFor="pincode" className="block text-gray-600 font-medium mb-2">Pincode</label>
            <input
              id="pincode"
              name="pincode"
              maxLength={6}
              type="text"
              {...register("pincode", { required: "Pincode is required", pattern: { value: /^[0-9]{6}$/, message: "Pincode must be 6 digits" } })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
          </div>

          {/* City */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-600 font-medium mb-2">City</label>
            <input
              id="city"
              name="city"
              type="text"
              {...register("city", { required: "City is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>

          {/* Landmark */}
          <div className="mb-4">
            <label htmlFor="landmark" className="block text-gray-600 font-medium mb-2">Landmark</label>
            <input
              id="landmark"
              name="landmark"
              type="text"
              {...register("landmark", { required: "Landmark is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.landmark && <p className="text-red-500 text-sm">{errors.landmark.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-medium mb-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-600 font-medium mb-2">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              {...register("confirmPassword", { 
                required: "Please confirm your password", 
                validate: (value) => value === watch('password') || "Passwords don't match"
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="mb-4 text-center">
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md focus:outline-none"
            >
              Register
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center text-sm text-gray-500">
            <span>Already have an account? </span>
            <Link to="/login" className="text-blue-700 hover:underline">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
