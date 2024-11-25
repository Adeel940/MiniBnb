import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/listings/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch listing details");
        }
        const data = await response.json();
        setListing(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListingDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(listing.images);
  return (
    <div className="container mx-auto py-4">
      <h2 className="text-3xl font-semibold mb-6">Listing Details</h2>
      {listing && (
        <div>
          <img
            src={listing.images?.[0] || "default-image.jpg"} // Fallback to default image if not provided
            alt={listing.title}
            className="w-full h-64 object-cover mb-4"
          />
          <h3 className="text-2xl font-bold">{listing.title}</h3>
          <p className="text-gray-600">{listing.description}</p>
          <p className="mt-4">Host: {listing.host}</p>
          <p>Status: {listing.status}</p>

          {/* Button to redirect to the booking page */}
          <Link to={`/book/${id}`}>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ListingDetails;