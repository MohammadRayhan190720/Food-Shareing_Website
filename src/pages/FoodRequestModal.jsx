import React from "react";
import { useForm } from "react-hook-form";

const FoodRequestModal = () => {

  // const [foods,setFoods] = useState({})

  // useEffect(() =>{
  //   axios.get('')
  // },[])


  const { register, handleSubmit } = useForm();

  const onSubmit = (data,id) => {
    console.log(data);
    console.log(id)
    // Handle form submission here (e.g., send the data to your backend)
  };

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-3xl lg:text-4xl font-Playfire text-center">Food Request Form</h3>
          <p className="py-4">Fill in the details below:</p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            {/* Food Name */}
            <div>
              <label className="block font-medium mb-2">Food Name</label>
              <input
                type="text"
                {...register("foodName")}
                className="input input-bordered w-full"
              />
            </div>

            {/* Food Image */}
            <div>
              <label className="block font-medium mb-2">Food Image</label>
              <input
                type="text"
                {...register("foodImage")}
                className="input input-bordered w-full"
              />
            </div>

            {/* Food ID */}
            <div>
              <label className="block font-medium mb-2">Food ID</label>
              <input
                type="text"
                {...register("foodId")}
                className="input input-bordered w-full"
              />
            </div>

            {/* Food Donator Email */}
            <div>
              <label className="block font-medium mb-2">
                Food Donator Email
              </label>
              <input
                type="email"
                {...register("donatorEmail")}
                className="input input-bordered w-full"
              />
            </div>

            {/* Food Donator Name */}
            <div>
              <label className="block font-medium mb-2">
                Food Donator Name
              </label>
              <input
                type="text"
                {...register("donatorName")}
                className="input input-bordered w-full"
              />
            </div>

            {/* User Email */}
            <div>
              <label className="block font-medium mb-2">User Email</label>
              <input
                type="email"
                {...register("userEmail")}
                className="input input-bordered w-full"
              />
            </div>

            {/* Request Date */}
            <div>
              <label className="block font-medium mb-2">Request Date</label>
              <input
                type="date"
                {...register("requestDate")}
                className="input input-bordered w-full"
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block font-medium mb-2">Pickup Location</label>
              <input
                type="text"
                {...register("pickupLocation")}
                className="input input-bordered w-full"
              />
            </div>

            {/* Expire Date */}
            <div>
              <label className="block font-medium mb-2">Expire Date</label>
              <input
                type="date"
                {...register("expireDate")}
                className="input input-bordered w-full"
              />
            </div>

            {/* Additional Notes */}
            <div className="col-span-2">
              <label className="block font-medium mb-2">Additional Notes</label>
              <textarea
                {...register("additionalNotes")}
                className="textarea textarea-bordered w-full"
                rows="3"
              ></textarea>
            </div>

            {/* Submit and Close Buttons */}
            <div className="col-span-2 flex justify-end mt-4">
              <button type="submit" className="btn bg-secondary1">
                Submit
              </button>
              <button
                type="button"
                className="btn ml-2"
                onClick={() => document.getElementById("my_modal_4").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default FoodRequestModal;
