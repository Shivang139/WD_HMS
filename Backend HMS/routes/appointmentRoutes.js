// appointmentRoutes.js

const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// // Routes for appointments
// router.get('/', appointmentController.getAllAppointments);
// router.get('/:id', appointmentController.getAppointmentById);
router.post('/', appointmentController.createAppointment);
// router.put('/:id', appointmentController.updateAppointment);
// router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
