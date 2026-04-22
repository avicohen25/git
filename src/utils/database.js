const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

//mongoClient.connect('mongodb+srv://avicohen25_db_user:s7vdA5P2EuaNrNsV@cluster0.vj7id4l.mongodb.net/');

let _db;

const mongoConnect = (callback) => {
    mongoClient.connect('mongodb://localhost:27017/')
    .then((client) => {
        console.log('Connected to MongoDB');
        _db = client.db('test_db');
        callback();
    })
    .catch((err) => {
        console.error(err);
        throw err;
    });
};

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'no database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;