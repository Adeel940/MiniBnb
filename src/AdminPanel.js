import React, { useState } from 'react';

const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [host, setHost] = useState('');
  const [status, setStatus] = useState('');
  const [images, setImages] = useState([]);
  const [listingIdToDelete, setListingIdToDelete] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission to add a listing
  const handleAddListing = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // assuming token is stored in localStorage
        },
        body: JSON.stringify({
          title,
          host,
          status,
          images,
        }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error adding listing');
    }
  };

  // Handle listing deletion
  const handleDeleteListing = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/listings/${listingIdToDelete}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error deleting listing');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-400">Admin Panel</h2>

        {/* Add New Listing */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add New Listing</h3>
          <form onSubmit={handleAddListing} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Host"
              value={host}
              onChange={(e) => setHost(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Image URLs (comma separated)"
              value={images}
              onChange={(e) => setImages(e.target.value.split(','))}
              required
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500 transition duration-300"
            >
              Add Listing
            </button>
          </form>
        </div>

        {/* Delete Listing */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Delete Listing</h3>
          <input
            type="text"
            placeholder="Listing ID"
            value={listingIdToDelete}
            onChange={(e) => setListingIdToDelete(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
          />
          <button
            onClick={handleDeleteListing}
            className="w-full bg-red-400 text-white py-2 rounded-md hover:bg-red-500 transition duration-300"
          >
            Delete Listing
          </button>
        </div>

        {/* Message */}
        {message && (
          <p className="mt-6 text-center text-lg font-semibold text-blue-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
