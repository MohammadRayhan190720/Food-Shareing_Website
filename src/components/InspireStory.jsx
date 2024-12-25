import { useEffect, useState } from "react";
import HighlightKeyMetrics from "./HighlightKeyMetrics";
import axios from "axios";
import InspiresStoryCard from "./InspiresStoryCard";

const InspireStory = () => {
  const [story,setStory] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/inspiredStory")
    .then(res => {
      setStory(res.data);
      // console.log(res.data)
    })
  },[])


  return (
    <div className="mt-10 lg:mt-16 max-w-7xl mx-auto">
      <div className="text-center space-y-4 ">
        <h2 className="font-Playfire text-3xl md:text-4xl lg:text-5xl font-semibold">
          Inspiring Lives Together
        </h2>
        <p className="w-1/2 mx-auto">
          Real stories from our community members who have experienced the power
          of sharing. Together, we create a world where no one goes hungry and
          kindness knows no bounds.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {story.map((singleStory) => (
          <InspiresStoryCard
            key={singleStory._id}
            singleStory={singleStory}
          ></InspiresStoryCard>
        ))}
      </div>
      <HighlightKeyMetrics></HighlightKeyMetrics>
    </div>
  );
};

export default InspireStory;