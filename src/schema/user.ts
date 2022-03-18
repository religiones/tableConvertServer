import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

// 用户实体类, Schema对象实体化
export const UserSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    city: {
        type: String
    },
    age: {
        type: Number
    },
    major:{
        type: String
    },
    career: {
        type: String
    },
    sex: {
        type: String,
        enum: ['男', '女']
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
