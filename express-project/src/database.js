import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/mydb',
    { useNewUrlParser: true, useUnifiedTopology: true },

);