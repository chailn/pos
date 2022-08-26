import React from "react";
import Card from "./elements/Card";

const Pricing = () => {
  return (
    <div className="w-full h-screen bg-img2 bg-cover bg-center grid place-items-center lg:grid-cols-2 children:w-11/12 children:h-5/6 text-center p-4">
      <Card imageText="cake" h1Text="see more" bgImage="bg-img3" />
      <Card imageText="cakepen" h1Text="see more" bgImage="bg-img4" />
      <Card imageText="coffee" h1Text="see more" bgImage="bg-img5" />
      <Card imageText="breakfast" h1Text="see more" bgImage="bg-img6" />
    </div>
  );
};

export default Pricing;
