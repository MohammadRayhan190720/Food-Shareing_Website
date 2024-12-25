import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import moment from "moment";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyFoodRequest = () => {
  const [myFoodReq, setMyFoodReq] = useState([]);

  // console.log(myFoodReq);

  const { user } = useContext(AuthContext);

  //axiossecure

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/userFood/${user?.email}`).then((res) => {
      setMyFoodReq(res.data);
    });
  }, []);

  // useEffect(() => {

  //   if(user?.email){

  //     fetchAllFoods()
  //   }

  // },[user?.email])

  // const fetchAllFoods = async () => {
  //   const { data } = await axios.get(
  //     `https://food-for-all-server-two.vercel.app/userFood/${user?.email}`
  //   );
  //   setMyFoodReq(data);
  // };
  return (
    <div className="overflow-x-auto max-w-md md:max-w-xl lg:max-w-5xl mx-auto mt-5 lg:mt-8">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>Serial</label>
            </th>
            <th>Donator Info</th>
            <th>Food Info </th>
            <th> Expire Date</th>
            <th>Request Date</th>
          </tr>
        </thead>
        <tbody>
          {myFoodReq?.map((food, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={food.donatorImage} alt={food.donatorName} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{food.donatorName}</div>
                    <div className="text-sm opacity-50">
                      {food.pickupLocation}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={food?.foodImage} alt={food.foodName} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{food?.foodName}</div>
                    <div className="text-sm opacity-50 flex items-center gap-1">
                      <MdOutlineProductionQuantityLimits />

                      {food?.foodQuantity}
                    </div>
                  </div>
                </div>
              </td>
              <td>{moment(food?.expiredDateTime).format("L")}</td>
              <td>{moment(food?.requestDate).format("L")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyFoodRequest;
