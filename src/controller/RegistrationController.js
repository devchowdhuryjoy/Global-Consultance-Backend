const Registration = require('../models/Registration');

exports.registrations = async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
};
