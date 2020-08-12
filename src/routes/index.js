const PatientsRoutes = require('./patients');

module.exports = {
  loadRoutes(app) {
    app.use('/patients', PatientsRoutes);
  },
};