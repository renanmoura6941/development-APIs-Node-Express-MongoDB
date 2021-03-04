import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/mydb',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on('erro', console.error.bind(console, 'connecction error'));

mongoose.connection.once('open', function () {
    console.log('mongodb is connected');
});