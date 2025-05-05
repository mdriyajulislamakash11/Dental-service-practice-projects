import React from "react";
import Banner from "../components/Banner";
import { Link, useLoaderData } from "react-router-dom";
import ServiseCard from "./ServiseCard";
import FeedBackCard from "./FeedBackCard";

const Home = () => {
  const { serviceData, feedbackData } = useLoaderData();

  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Head Line */}
      <div className="my-20">
        <h1 className="text-center text-4xl font-bold">Our All Treatments</h1>
        <p className="text-center mt-3 text-gray-400 w-2/5 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          distinctio, natus nulla et ea provident voluptas? Ea consequatur
          officia quas ab animi minus ut?
        </p>
      </div>

      {/* All Treatment cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceData.slice(0, 4).map((service) => (
          <ServiseCard key={service.id} service={service} />
        ))}
      </div>

      <button className="block mx-auto my-4 btn rounded-full px-8 btn-primary">
        <Link to="/allTreatments">Show More...</Link>
      </button>

      {/* Head Line */}
      <div className="my-20">
        <h1 className="text-center text-4xl font-bold">Our FeedBack</h1>
        <p className="text-center mt-3 text-gray-400 w-2/5 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          distinctio, natus nulla et ea provident voluptas? Ea consequatur
          officia quas ab animi minus ut?
        </p>
      </div>

      {/* All Treatment cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {feedbackData.map((feedback) => (
          <FeedBackCard key={feedback.reviewId} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default Home;
