const getDb = require('../utils/database').getDb;

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    save() {
        const db = getDb();

        return db.collection('users')
        .insertOne(this)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
}

module.exports = User;