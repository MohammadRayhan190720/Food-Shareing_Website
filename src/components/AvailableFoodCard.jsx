import moment from "moment";

const AvailableFoodCard = ({food}) => {
  console.log(food)
  const { foodImage, foodName, expiredDateTime, additionalNotes } = food;
  return (
    <div className="card bg-base-100  shadow-xl mt-6 lg:mt-8">
      <figure>
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-56 object-cover"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{foodName}</h2>
        <div className="text-left">
          <p>{additionalNotes}</p>
          <p>EXP:{moment(expiredDateTime).format("L")}</p>
        </div>

        <div className="card-actions justify-start">
          <button className="btn bg-secondary1 text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodCard;