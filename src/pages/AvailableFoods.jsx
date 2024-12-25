import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "../components/AvailableFoodCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AvailableFoods = () => {
  const foodData = useLoaderData();
  console.log(foodData);

  const [foods, setFoods] = useState(foodData);
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState(true);

  const handleSort = () => {
    axios.get("https://food-for-all-server-two.vercel.app/food").then((res) => {
      console.log(res.data);
      setFoods(res.data);
    });
  };

  //for sarch function

  useEffect(() => {
    axios
      .get(
        `https://food-for-all-server-two.vercel.app/foods?searchParams=${search}`
      )
      .then((res) => {
        setFoods(res.data);
      });
  }, [search]);

  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-auto px-5">
      <div className="text-center space-y-4 ">
        <h3 className="font-Playfire text-3xl md:text-4xl lg:text-5xl font-semibold">
          Available Food for Donation
        </h3>
        <p className="text-center space-y-4">
          Discover a variety of food items available for donation. Help those in
          need by selecting food that is ready for pickup and contribute to
          making a difference.
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:justify-evenly ">
          <button onClick={handleSort} className="btn border border-secondary1">
            Sort By Expire Date
          </button>
          <div className=" text-black">
            <label className="input input-bordered flex items-center gap-2">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="grow"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          <button
            className="btn border border-secondary1 invisible md:visible"
            onClick={() => {
              setLayout(!layout);
            }}
          >
            Change Layout
          </button>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 gap-5 ${
          layout ? "md:grid-cols-3" : "md:grid-cols-2"
        }`}
      >
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
