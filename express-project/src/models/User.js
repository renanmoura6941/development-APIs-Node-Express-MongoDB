import { Schema, model } from "mongoose";

const UserShema = new Schema({
    name: {
        type: String,
        requered: true
    },
    email: {
        type: String,
        requered: true,
        unique:true,
        lowercase:true
    }
});