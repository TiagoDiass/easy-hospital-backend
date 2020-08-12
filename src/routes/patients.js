const express = require('express');
const PatientController = require('../controllers/PatientController');
const PatientsMiddlewares = require('../middlewares/patientsMiddlewares');

const routes = express.Router();

routes.get('/', PatientController.index);
routes.post('/new', PatientsMiddlewares.validateDataOnCreate, PatientController.store);
routes.get('/:id', PatientController.getOne);
routes.put('/:id', PatientsMiddlewares.validateDataOnEdit, PatientController.edit);
routes.delete('/:id', PatientController.delete);

module.exports = routes;