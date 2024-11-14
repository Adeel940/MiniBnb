import React, { useEffect, useState } from "react";
import Card from "../Card";

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/listings');
                // const response = await fetch('/api/listings');
                console.log(response);
                const data = await response.json();
                console.log(data);
                setExperiences(data);
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto py-4">
            <h2 className="text-3xl font-semibold mb-6 ml-6">Past experiences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {experiences.map((experience) => (
                    <Card
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
