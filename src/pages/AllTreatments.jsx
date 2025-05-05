import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiseCard from "./ServiseCard";

const AllTreatments = () => {
  const serviceData = useLoaderData();
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceData.map((service) => (
          <ServiseCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllTreatments;
