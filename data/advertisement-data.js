module.exports = (advertisementCollection) => {

    return {
        getById(id) {
            const validObjectId = new RegExp('^[0-9a-fA-F]{24}$');

            if (!validObjectId.test(id)) {
                return Promise.reject();
            }

            const _id = advertisementCollection.generateId(id);

            const search = {
                _id,
            };

            return advertisementCollection.find(search);
        },
        findAdvertisements(query) {
            if (!query) {
                return advertisementCollection.find();
            }

            let search = null;

            if (query.query) {
                const regex = new RegExp(`.*${query.query}.*`, 'i');

                search = {
                    $or: [
                        { title: regex },
                        { description: regex },
                    ],
                };
            }

            let sort = null;

            if (query.sort && query.orderBy) {
                const sortType =
                    query.sort === 'asc'
                        ? 1
                        : -1;

                sort = {
                    [query.orderBy]: sortType,
                };
            }

            return advertisementCollection.find(search, {}, sort);
        },
        createAdvertisement(advertisement) {
            return advertisementCollection.insertOne(advertisement);
        },
    };
};
