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
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      
      <div>
        <h3>Add New Listing</h3>
        <form onSubmit={handleAddListing}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Host"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URLs (comma separated)"
            value={images}
            onChange={(e) => setImages(e.target.value.split(','))}
            required
          />
          <button type="submit">Add Listing</button>
        </form>
      </div>

      <div>
        <h3>Delete Listing</h3>
        <input
          type="text"
          placeholder="Listing ID"
          value={listingIdToDelete}
          onChange={(e) => setListingIdToDelete(e.target.value)}
          required
        />
        <button onClick={handleDeleteListing}>Delete Listing</button>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminPanel;
