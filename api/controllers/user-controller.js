module.exports = ({ userData }) => {
    return {
        getUserByUsername(req, res) {
            const username = req.params.username;

            return userData.getByUsername(username)
                .then((result) => {
                    return res.json({
                        result,
                    });
                });
        },
        getAllUsers(req, res) {
            return userData.getAll()
                .then((result) => {
                    return res.json({
                        result,
                    });
                });
        },
        editUser(req, res) {
            const userToEditUsername = req.params.username;

            return userData.editUser(userToEditUsername, req.body)
                .then((result) => {
                    return res.json({
                        result: result.value,
                    });
                });
        },
        createUser(req, res) {
            const user = req.body;

            return userData.createUser(user)
                .then(() => {
                    return res.json({
                        result: user,
                    });
                });
        },
    };
};
