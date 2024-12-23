import { IoLocationOutline } from "react-icons/io5";
import { GiShieldImpact } from "react-icons/gi";


const InspiresStoryCard = ({ singleStory }) => {
  console.log(singleStory);
  const { dateShared, image, impactLevel, name, place, shortDescription } =
    singleStory;
  return (
    <div className="card bg-base-100  shadow-xl mt-8 lg:mt-12">
      <figure>
        <img src={image} alt={name} className="w-full h-40 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name.substring(0,12)}
          <div className="badge badge-secondary">{dateShared}</div>
        </h2>
        <p>{shortDescription}</p>
        <div className="card-actions">
          <div className="badge badge-outline flex items-center">
            <IoLocationOutline />

            {place}
          </div>
          <div className="badge badge-outline flex items-center">
            <GiShieldImpact />

            {impactLevel}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspiresStoryCard;
