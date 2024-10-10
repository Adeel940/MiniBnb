import React from "react";
import Card from "./components/Card"; 

const Experiences = () => {

  const experiences = [
    {
      images: ["Images/1.jpg", "Images/3.jpg", "Images/2.jpg",],
      title: "Playdate at Polly Pocket’s Compact",
      host: "Polly Pocket",
      status: "Sold out",
    },
    {
      images: ["Images/2.jpg", "Images/1.jpg", "Images/3.jpg", ],
      title: "Sleepover at Polly Pocket’s Compact",
      host: "Polly Pocket",
      status: "Sold out",
    },
    {
      images: ["Images/3.jpg", "Images/1.jpg", "Images/5.jpg", ],
      title: "Go VIP with Kevin Hart",
      host: "Kevin Hart",
      status: "Available",
    },
    {
        images: ["Images/4.jpg", "Images/2.jpg", "Images/7.jpg", ],
        title: "Sleepover at Polly Pocket’s Compact",
        host: "Polly Pocket",
        status: "Sold out",
      },
      {
        images: ["Images/5.jpg", "Images/3.jpg", "Images/2.jpg", ],
        title: "Go VIP with Kevin Hart",
        host: "Kevin Hart",
        status: "Available",
      },
      {
        images: ["Images/6.jpg", "Images/6.jpg", "Images/1.jpg", ],
        title: "Sleepover at Polly Pocket’s Compact",
        host: "Polly Pocket",
        status: "Sold out",
      },
      {
        images: ["Images/7.jpg", "Images/2.jpg", "Images/6.jpg", ],
        title: "Go VIP with Kevin Hart",
        host: "Kevin Hart",
        status: "Available",
      },

  ];

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-3xl font-semibold mb-6 ml-6">Past experiences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {experiences.map((experience, index) => (
          <Card
            key={index}
            images={experience.images}
            title={experience.title}
            host={experience.host}
            status={experience.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
