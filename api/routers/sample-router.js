module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { sampleController } = controllers;

    router.get('/', (req, res) => res.send('it works'));

    app.use('/', router);
};
