module.exports = (sampleCollection) => {

    return {
        sampleMethod(params) {
            return sampleCollection.count();
        },
    };
};
