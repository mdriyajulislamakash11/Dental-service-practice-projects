import React from "react";
import { Link } from "react-router-dom";

const ServiseCard = ({ service }) => {
  const { id, treatment, image, description, cost } = service || {};

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        {/* Dynamic image */}
        <img
          className="h-60"
          src={
            image ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={treatment || "Service Image"}
        />
      </figure>
      <div className="card-body">
        {/* Dynamic title and description */}
        <h2 className="card-title my-6">{treatment || "Treatment Name"}</h2>
        <p>{description.slice(0, 300) || "No description available."}...</p>
        <div className="card-actions justify-between items-center my-4">
          {/* Displaying cost */}

          <span className="text-xl font-semibold">
            {cost ? `$${cost}` : "Price not available"}
          </span>
          <Link to={`/service/${id}`} className="btn btn-primary rounded-full">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiseCard;
