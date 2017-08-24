module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { userController } = controllers;

    router
        .get('/:username', userController.getUserByUsername)
        .get('/', userController.getAllUsers)
        .post('/:username', userController.editUser)
        .post('/', userController.createUser);

    app.use('/api/users', router);
};
