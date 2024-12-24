import moment from "moment";
import { useLoaderData } from "react-router-dom";

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
    <div className="flex flex-col lg:flex-row gap-8 card shadow-lg max-w-5xl mx-auto mt-10 lg:mt-14 p-6">
      <div className="w-full md:w-1/2">
        <img className="w-full h-screen" src={foodImage} alt="" />
      </div>
      <div>
        <div className="w-full md:w-1/2">
          <p>{foodName}</p>
          <p>{foodStatus}</p>
        </div>
        <div>
          <p>{foodQuantity}</p>
          <p>{pickupLocation}</p>
        </div>
        <div>
          <p>EXP:{moment(expiredDateTime).format("L")}</p>
          <p>{additionalNotes}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;