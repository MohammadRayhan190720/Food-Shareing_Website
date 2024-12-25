import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
 

  const {user} = useContext(AuthContext)
  const email = user?.email;
  const name = user?.displayName;
  const image = user?.photoURL;
  // console.log(name,image,email)


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      donatorImage:image,
      donatorName: name,  
      donatorEmail:email,  
    },
  });


  const onSubmit = (data) => {
    // Add "available" status by default
    data.foodStatus = "available";
    const foodQuantityNumber = parseInt(data.foodQuantity)
    data.foodQuantity = foodQuantityNumber;
    console.log(data)
    axios.post("http://localhost:5000/add-foods",data)
    .then(res =>{
      if(res.data.insertedId){
        Swal.fire({
          title: "Successfull",
          text: "Food added successfully",
          icon: "success",
        });
        reset();
      }
      
    })


  };

  return (
    <div className="p-6 max-w-7xl mx-auto font-Roboto bg-white rounded shadow-lg">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-Playfire font-semibold my-6 lg:my-8 text-center">
        Add Food For Donation
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Food Name */}
        <div>
          <label className="block font-medium mb-1">Food Name</label>
          <input
            type="text"
            {...register("foodName", { required: "Food name is required" })}
            className="w-full p-2 border rounded"
            placeholder="Enter the food name"
          />
          {errors.foodName && (
            <p className="text-red-500 text-sm">{errors.foodName.message}</p>
          )}
        </div>

        {/* Food Image */}
        <div>
          <label className="block font-medium mb-1">Food Image (URL)</label>
          <input
            type="text"
            {...register("foodImage", { required: "Food image is required" })}
            className="w-full p-2 border rounded"
            placeholder="Enter the image URL"
          />
          {errors.foodImage && (
            <p className="text-red-500 text-sm">{errors.foodImage.message}</p>
          )}
        </div>

        {/* Food Quantity */}
        <div>
          <label className="block font-medium mb-1">Food Quantity (Kg) </label>
          <input
            type="number"
            {...register("foodQuantity", {
              required: "Food quantity is required",
            })}
            className="w-full p-2 border rounded"
            placeholder="Enter the quantity"
          />
          {errors.foodQuantity && (
            <p className="text-red-500 text-sm">
              {errors.foodQuantity.message}
            </p>
          )}
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block font-medium mb-1">Pickup Location</label>
          <input
            type="text"
            {...register("pickupLocation", {
              required: "Pickup location is required",
            })}
            className="w-full p-2 border rounded"
            placeholder="Enter the pickup location"
          />
          {errors.pickupLocation && (
            <p className="text-red-500 text-sm">
              {errors.pickupLocation.message}
            </p>
          )}
        </div>

        {/* Expired Date/Time */}
        <div>
          <label className="block font-medium mb-1">Expired Date/Time</label>
          <input
            type="datetime-local"
            {...register("expiredDateTime", {
              required: "Expired date/time is required",
            })}
            className="w-full p-2 border rounded"
          />
          {errors.expiredDateTime && (
            <p className="text-red-500 text-sm">
              {errors.expiredDateTime.message}
            </p>
          )}
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block font-medium mb-1">Additional Notes</label>
          <textarea
            {...register("additionalNotes")}
            className="w-full p-2 border rounded"
            placeholder="Any additional notes..."
          ></textarea>
        </div>

        {/* Donator Information */}
        <div className="md:col-span-2 bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold">Donator Information</h3>
          <div className="space-y-4 mt-2">
            {/* Donator Image */}
            <div>
              <label className="block font-medium mb-1">
                Donator Image URL
              </label>
              <input
                type="text"
                readOnly
                {...register("donatorImage", {
                  required: "Image URL is required",
                })}
                className="w-full p-2 border rounded"
                placeholder="Enter image URL"
              />
              {errors.donatorImage && (
                <p className="text-red-500 text-sm">
                  {errors.donatorImage.message}
                </p>
              )}
            </div>

            {/* Donator Name */}
            <div>
              <label className="block font-medium mb-1">Donator Name</label>
              <input
                type="text"
                readOnly
                {...register("donatorName", { required: "Name is required" })}
                className="w-full p-2 border rounded"
                placeholder="Enter your name"
              />
              {errors.donatorName && (
                <p className="text-red-500 text-sm">
                  {errors.donatorName.message}
                </p>
              )}
            </div>

            {/* Donator Email */}
            <div>
              <label className="block font-medium mb-1">Donator Email</label>
              <input
                type="email"
                readOnly
                {...register("donatorEmail", {
                  required: "Email is required",

                })}
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
              />
              {errors.donatorEmail && (
                <p className="text-red-500 text-sm">
                  {errors.donatorEmail.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Add Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-secondary2 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
