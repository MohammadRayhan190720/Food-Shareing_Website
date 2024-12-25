import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "../components/AvailableFoodCard";
import { useState } from "react";
import axios from "axios";

const AvailableFoods = () => {

    const foodData = useLoaderData();
    console.log(foodData);

  const [foods,setFoods] = useState(foodData)

  const handleSort = () =>{

    axios.get("http://localhost:5000/food")
    .then(res =>{
      console.log(res.data)
      setFoods(res.data)
    })
  }



  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-auto">
      <div className="text-center space-y-4 ">
        <button onClick={handleSort} className="btn border border-secondary1">Sort By Date</button>
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
        {foods
          .filter((food) => food.foodStatus === "available")
          .map((food) => (
            <AvailableFoodCard food={food} key={food._id}></AvailableFoodCard>
          ))}
      </div>
    </div>
  );
};

export default AvailableFoods;