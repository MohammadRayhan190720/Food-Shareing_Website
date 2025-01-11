import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Team1 from '../assets/images/share1.jpg'
import Team2 from '../assets/images/share-2.jpg'
import Team3 from '../assets/images/help-1jpg.jpg'
import Team4 from '../assets/images/help-2.jpg'


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
    <section className="bg-gray-50 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-Playfire text-center font-semibold text-green-600 mb-12">
        Our Impact
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
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
      <div className="lg:flex lg:justify-evenly lg:gap-6 lg:items-center mt-6 lg:mt-8 hidden">
        <div>
          <motion.img
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={Team1}
            className="max-w-40 md:max-w-xs rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            src={Team2}
            className="max-w-40 md:max-w-xs rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl"
          />
        </div>
        <div>
          <motion.img
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            src={Team3}
            className="max-w-40 md:max-w-xs rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            src={Team4}
            className="max-w-40 md:max-w-xs rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HighlightKeyMetrics;
