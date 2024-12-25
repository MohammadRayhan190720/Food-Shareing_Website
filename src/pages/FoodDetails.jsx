import moment from "moment";
import { useLoaderData } from "react-router-dom";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GiCardPickup } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import FoodRequestModal from "./FoodRequestModal";



const FoodDetails = () => {

  const foodData = useLoaderData()
  // console.log(foodData)

  const {
    additionalNotes,
    donatorEmail,
    donatorImage,
    donatorName,
    expiredDateTime,
    foodImage,
    foodName,
    foodQuantity,
    foodStatus,
    pickupLocation,
  } = foodData;

  return (
    <div className="flex flex-col lg:flex-row gap-8 card shadow-lg max-w-7xl mx-auto mt-10 lg:mt-14 p-6 items-center justify-center">
      <div className="w-full md:w-1/2">
        <img className="w-full h-screen rounded-xl" src={foodImage} alt="" />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="font-Playfire text-2xl lg:text-3xl font-semibold text-center">
          {foodName}
        </h2>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2 bg-secondary2 px-2 py-1 rounded-md">
            <MdOutlineEventAvailable />
            {foodStatus}
          </p>
          <p className="flex items-center gap-2 bg-secondary2 px-2 py-1 rounded-md">
            <MdProductionQuantityLimits />
            {foodQuantity}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2 bg-secondary2 px-2 py-1 rounded-md">
            <GiCardPickup />
            {pickupLocation}
          </p>
          <p className="flex items-center gap-2 bg-secondary2 px-2 py-1 rounded-md">
            <BsCalendar2Date />
            EXP:{moment(expiredDateTime).format("L")}
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2 bg-secondary2 px-2 py-1 rounded-md">
            <MdOutlineSpeakerNotes />
            {additionalNotes}
          </p>
        </div>
        <div>
          <div className="card flex justify-between items-center flex-col border border-secondary1 p-4 shadow-lg space-y-3">
            <h2 className="font-Playfire text-2xl font-semibold">
              Donar Information
            </h2>
            <img
              className="w-20 h-20 rounded-full "
              src={donatorImage}
              alt={donatorName}
            />
            <p> Name: {donatorName}</p>
            <p> Email: {donatorEmail}</p>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="px-5 py-3 bg-primary1 rounded-md text-white flex items-center gap-2 hover:bg-secondary1"
            >
              <FaHandsHelping />
              Food Request
            </button>
          </div>
        </div>
      </div>
      <FoodRequestModal foodData={foodData}>
        
      </FoodRequestModal>
    </div>
  );
};

export default FoodDetails;