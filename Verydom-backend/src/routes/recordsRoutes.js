const express = require('express');
const RecordsManagementController = require('../controllers/recordsManagementController');

const setRecordsRoutes = (app) => {
    const recordsController = new RecordsManagementController();

    app.get('/records', recordsController.getRecords.bind(recordsController));
    app.post('/records', recordsController.addRecord.bind(recordsController));
};

module.exports = setRecordsRoutes;