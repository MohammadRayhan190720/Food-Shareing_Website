import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import moment from "moment";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const [myAddedFood, setMyAddedFood] = useState([]);

  console.log(myAddedFood);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetchAllFoods();
    }
  }, [user?.email]);

  const fetchAllFoods = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/food/${user?.email}`
    );
    setMyAddedFood(data);
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/foods/${_id}`)
         .then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Food has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto max-w-md md:max-w-xl lg:max-w-5xl mx-auto mt-5 lg:mt-8">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>Serial</label>
            </th>
            <th>Food Info </th>
            <th> Expire Date</th>
            <th>Additional Note</th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {myAddedFood?.map((food, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
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
              <td title={food?.additionalNotes}>
                {food?.additionalNotes.slice(0, 15)}
              </td>
              <th>
                <Link
                  to={`/updateFood/${food._id}`}
                  className="btn bg-secondary2 btn-sm"
                >
                  <CiEdit />
                </Link>
                <button
                  onClick={() => {
                    handleDelete(food._id);
                  }}
                  className="btn bg-secondary1 btn-sm"
                >
                  <RiDeleteBin6Line />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMyFoods;
