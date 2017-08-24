module.exports = ({ chatData }) => {
    return {
        getUserChats(req, res) {
            const username = req.params.username;

            return chatData.getUserChats(username)
                .then((result) => {
                    return res.json({
                        result,
                    });
                });
        },
        getChat(req, res) {
            const participant1 = req.query.sender;
            const participant2 = req.query.recipient;

            return chatData.getChat(participant1, participant2)
                .then((result) => {
                    return res.json({
                        result,
                    });
                });
        },
        sendMessage(req, res) {
            const id = req.params.id;
            const message = req.body;

            return chatData.sendMessage(id, message)
                .then((result) => {
                    return res.json({
                        result,
                    });
                });
        },
    };
};
