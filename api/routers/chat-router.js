module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { chatController } = controllers;

    // Get user`s chats
    // Get specific chat
    // Send message on chat

    router
        .get('/:username', chatController.getUserChats)
        .get('/', chatController.getChat)
        .post('/:id', chatController.sendMessage);


    app.use('/api/chats', router);
};
