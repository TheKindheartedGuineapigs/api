module.exports = (chatCollection) => {

    return {
        getUserChats(username) {
            const search = {
                participants: {
                    $elemMatch: { $eq: username },
                },
            };

            return chatCollection.find(search);
        },
        getChat(sender, recipient) {
            const search = {
                $and: [
                    { participants: { $elemMatch: { $eq: sender } } },
                    { participants: { $elemMatch: { $eq: recipient } } },
                ],
            };

            return chatCollection.findOne(search)
                .then((result) => {
                    if (!result) {
                        return chatCollection.insertOne({
                            participants: [sender, recipient],
                            messages: [],
                        });

                    }

                    return Promise.resolve(result);
                })
                .then((result) => {
                    if (result.ops) {
                        return Promise.resolve(result.ops);
                    }

                    return Promise.resolve(result);
                });
        },
        sendMessage(id, message) {
            const filter = {
                _id: chatCollection.generateId(id),
            };

            message.timeStamp = new Date();

            const update = {
                $push: {
                    messages: message ,
                },
                $set: {
                    lastMessage: message,
                },
            };

            return chatCollection.findAndModify(filter, update);
        }
    };
};
