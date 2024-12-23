import React, { useEffect, useState } from "react";

const HighlightKeyMetrics = () => {
  const [livesChanged, setLivesChanged] = useState(0);
  const [mealsShared, setMealsShared] = useState(0);
  const [communitiesEngaged, setCommunitiesEngaged] = useState(0);

  const targets = {
    livesChanged: 10000,
    mealsShared: 50000,
    communitiesEngaged: 2000,
  };

  useEffect(() => {
    const animateCounter = (target, setter, delay = 100) => {
      let current = 0;
      const increment = target / 200;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setter(Math.ceil(current));
      }, delay);
    };

    // Animate each counter when the component mounts
    animateCounter(targets.livesChanged, setLivesChanged);
    animateCounter(targets.mealsShared, setMealsShared);
    animateCounter(targets.communitiesEngaged, setCommunitiesEngaged);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <h2 className="text-3xl text-center font-bold text-green-600 mb-12">
        Our Impact
      </h2>
      <div className="flex justify-center gap-8 flex-wrap">
        <div className="card bg-white shadow-xl p-8 rounded-lg w-60 text-center">
          <span className="text-4xl font-extrabold text-green-600">
            {livesChanged}+
          </span>
          <p className="text-lg text-gray-600 mt-2">Lives Changed</p>
        </div>
        <div className="card bg-white shadow-xl p-8 rounded-lg w-60 text-center">
          <span className="text-4xl font-extrabold text-green-600">
            {mealsShared}+
          </span>
          <p className="text-lg text-gray-600 mt-2">Meals Shared</p>
        </div>
        <div className="card bg-white shadow-xl p-8 rounded-lg w-60 text-center">
          <span className="text-4xl font-extrabold text-green-600">
            {communitiesEngaged}+
          </span>
          <p className="text-lg text-gray-600 mt-2">Communities Engaged</p>
        </div>
      </div>
    </section>
  );
};

export default HighlightKeyMetrics;
