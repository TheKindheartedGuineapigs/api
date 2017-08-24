module.exports = ({ sampleData }) => {
    return {
        sampleMethod(req, res) {
            return res.send('it works');
        },
    };
};
