const Registration = require('../models/Registration');
const SendEmailUtility = require('../utilitys/SendEmailUtility'); // adjust path if needed

exports.registrations = async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();

    // Prepare email content
    const { firstName, lastName, email } = req.body;

    const emailSubject = 'Registration Successful - Global Routeway Consult';
    const emailText = `
Dear ${firstName} ${lastName},

Thank you for registering with Global Routeway Consult. We have received your information and will contact you shortly.

Here are your registration details:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${req.body.mobile}
Nearest Office: ${req.body.nearestOffice}
Study Destination: ${req.body.studyDestination}
English Test Status: ${req.body.englishTestStatus}
Funding Plan: ${req.body.fundingPlan}
Agreed to Terms: ${req.body.agreedToTerms ? 'Yes' : 'No'}

Regards,
Global Routeway Consult Team
`;


    // Send confirmation email
    await SendEmailUtility(email, emailText, emailSubject);

    res.status(200).json({ message: 'Registration successful and email sent' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
};
