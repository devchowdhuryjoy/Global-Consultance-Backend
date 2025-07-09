const express = require ('express');
const router = express.Router();
const registrationController = require('../controller/RegistrationController');

router.post('/registration', registrationController.registrations);


module.exports=router;