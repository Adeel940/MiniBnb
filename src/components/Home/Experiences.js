import React, { useEffect, useState } from "react";
import Card from "../Card";

const Experiences = ({ searchQuery }) => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:5000/api/listings";
        console.log(searchQuery);
        if (searchQuery) {
          url = `http://localhost:5000/api/listings/search?query=${searchQuery}`; // Append the search query
        }
        console.log(url);

        const response = await fetch(url);
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchData();
  }, [searchQuery]); // Fetch data whenever searchQuery changes

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-3xl font-semibold mb-6 ml-6">Past experiences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {experiences.map((experience) => (
          <Card
            id={experience.id}
            key={experience.id}
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
