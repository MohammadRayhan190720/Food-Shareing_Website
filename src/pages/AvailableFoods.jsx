import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "../components/AvailableFoodCard";

const AvailableFoods = () => {
  const foodData = useLoaderData()
  console.log(foodData)
  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-auto">
      <div className="text-center space-y-4 ">
        <h3 className="font-Popins text-3xl lg:text-4xl font-semibold">
          Available Food for Donation
        </h3>
        <p className="text-center space-y-4">
          Discover a variety of food items available for donation. Help those in
          need by selecting food that is ready for pickup and contribute to
          making a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foodData.map((food) => (
          <AvailableFoodCard food={food} key={food._id}></AvailableFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;