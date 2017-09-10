module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { advertisementController } = controllers;

    router
        .get('/:id', advertisementController.getById)
        .get('/', advertisementController.findAdvertisements)
        .post('/:id', advertisementController.deleteAdvertisement)
        .post('/', advertisementController.createAdvertisement);    

    app.use('/api/advertisements', router);
};
