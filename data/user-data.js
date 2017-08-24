module.exports = (userCollection) => {
    return {
        createUser(user) {
            return userCollection.insertOne(user);
        },
        editUser(username, editData) {
            const filter = {
                username: username,
            };

            const update = {
                $set: editData,
            };

            return userCollection.findAndModify(filter, update);
        },
        getAll() {
            return userCollection.find();
        },
        getByUsername(username) {
            const filter = {
                username,
            };

            return userCollection.find(filter);
        },
    };
};
