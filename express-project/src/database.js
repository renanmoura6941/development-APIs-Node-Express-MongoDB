import mongoose from 'mongoose';

class Database {

    constructor() {
        this.init();
    }

    init() {
        mongoose.connect('mongodb://localhost/mydb',
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        mongoose.connection.on('erro', console.error.bind(console, 'connecction error'));
        mongoose.connection.once('open', function () {
            console.log('mongodb is connected');
        });
    }

}

export default new Database();