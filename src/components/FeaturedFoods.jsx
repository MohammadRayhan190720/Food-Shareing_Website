import axios from "axios";
import { useEffect, useState } from "react";
import AvailableFoodCard from "./AvailableFoodCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


const FeaturedFoods = () => {
  // const [foods, setFoods] = useState([]);

  // useEffect(() =>{
  //   axios.get("http://localhost:5000/foods/highest")
  //   .then(res => {
  //     setFoods(res.data)
  //   })

  // },[])

  // use Query

  const {
    isPending,
    data: foods,
    error,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/foods/highest");
      return res.json();
    },
  });

  if (isPending) {
    return "Loading...";
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  // console.log(foods)

  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-auto">
      <div className="text-center space-y-4 ">
        <h2 className="font-Playfire text-3xl md:text-4xl lg:text-5xl font-semibold">
          Featured Foods
        </h2>
        <p className="w-1/2 mx-auto">
          Explore our carefully curated selection of featured foods, offering a
          variety of delicious and nutritious options ready for donation, making
          a difference in the lives of those in need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.map((food) => (
          <AvailableFoodCard food={food} key={food._id}></AvailableFoodCard>
        ))}
      </div>
      <div className="text-center my-6 lg:my-8">
        <Link
          to="/avaiableFoods"
          className="px-5 py-3 rounded-lg bg-primary1 text-white"
        >
          Show All Food
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoods;