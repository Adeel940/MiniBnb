// Controller: Mock create booking
const createBooking = (req, res) => {
    res.status(201).send({ message: 'Booking created (mock)' });
};

module.exports = {
    createBooking,
};
