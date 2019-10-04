const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { booking_id } = req.params;

    // TODO: Only the owner of spot can reject the request
    const booking = await Booking.findById(booking_id).populate('spot');

    booking.approvad = false;

    await booking.save();

    const bookingUserSocket = req.connectedUsers[booking.user];

    if (bookingUserSocket) {
      req.io.to(bookingUserSocket).emit('booking_response', booking);
    }

    return res.json({ ok: true });
  }
};