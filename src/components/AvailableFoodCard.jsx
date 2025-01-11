import moment from "moment";
import { Link } from "react-router-dom";
import { MdOutlineDescription } from "react-icons/md";
import { FcExpired } from "react-icons/fc";




const AvailableFoodCard = ({food}) => {
  // console.log(food)
  const { foodImage, foodName, expiredDateTime, additionalNotes,_id } = food;
  return (
    <div className="card bg-base-100  shadow-xl mt-6 lg:mt-8 px-5">
      <figure>
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className=" space-y-3 mt-3">
        <h2 className="card-title font-Popins text-2xl">{foodName}</h2>
        <div className="text-left space-y-2">
          <p className="font-medium flex items-center gap-1">
            <MdOutlineDescription />

            {additionalNotes}
          </p>
          <p className="flex items-center gap-1">
            <FcExpired />

            {moment(expiredDateTime).format("L")}
          </p>
        </div>

        <div className="card-actions justify-start mt-5 pb-3">
          <Link
            to={`/foodDetails/${_id}`}
            className="btn bg-secondary1 text-white rounded-xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodCard;