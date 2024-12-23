import HighlightKeyMetrics from "./HighlightKeyMetrics";

const InspireStory = () => {
  return (
    <div className="mt-10 lg:mt-16">
      <div className="text-center space-y-4 ">
        <h2 className="font-Popins text-3xl lg:text-4xl font-semibold">
          Stories That Inspire: Changing Lives Together
        </h2>
        <p className="w-1/2 mx-auto">
          Real stories from our community members who have experienced the power
          of sharing. Together, we create a world where no one goes hungry and
          kindness knows no bounds.
        </p>
      </div>
      <HighlightKeyMetrics></HighlightKeyMetrics>
    </div>
  );
};

export default InspireStory;