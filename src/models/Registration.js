const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobile: String,
  nearestOffice: String,
  studyDestination: String,
  englishTestStatus: String,
  fundingPlan: String,
  agreedToTerms: Boolean
});

module.exports = mongoose.model('Registration', registrationSchema);
