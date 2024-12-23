import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import FoodDonationMap from "../components/FoodDonationMap";
import InspireStory from "../components/InspireStory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <InspireStory></InspireStory>
      <FoodDonationMap></FoodDonationMap>
    </div>
  );
};

export default Home;