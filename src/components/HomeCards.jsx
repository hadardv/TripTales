import React from "react";
import CardUI from "../components/CardUI";
import { dummyTrips } from "../Dummy";


const HomeCards = () => {
  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="flex flex-wrap justify-center mx-4 items-start">
        {dummyTrips.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4 flex justify-center">
            <CardUI
              imgURL={item.imgURL}
              name={item.name}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards