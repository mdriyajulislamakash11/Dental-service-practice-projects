import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsCard = () => {
  const singleData = useLoaderData();
  const { treatment, image, description, cost } = singleData || {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
      <div className="card w-full md:max-w-[700px] bg-white shadow-xl border rounded-lg p-5">
        <figure>
          <img src={image} alt={treatment} className="rounded-lg h-64 w-full object-cover" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-3xl font-bold text-gray-800">{treatment}</h2>
          <p className="text-gray-600 mt-3">{description}</p>
          <p className="mt-4 text-lg font-semibold text-blue-600">Cost: ${cost}</p>
          <div className="card-actions justify-center mt-6">
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
