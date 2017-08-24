module.exports = ({ advertisementData }) => {
    return {
        getById(req, res) {
            const id = req.params.id;

            return advertisementData.getById(id)
                .then((result) => {
                    return res.json({
                        result,
                    });
                })
                .catch((err) => {
                    return res.json({
                        result: 'Invalid id',
                    });
                });
        },
        findAdvertisements(req, res) {
            // Search by hard-coded properties, can be made more flexible if needed
            const query = req.query;

            return advertisementData.findAdvertisements(query)
                .then((result) => {
                    return res.json({
                        result,
                    });
                });
        },
        createAdvertisement(req, res) {
            const advertisement = req.body;

            return advertisementData.createAdvertisement(advertisement)
                .then((result) => {
                    return res.json({
                        result,
                    });
                });
        },
    };
};
