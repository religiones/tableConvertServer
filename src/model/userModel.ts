import * as mongoose from 'mongoose'
import { UserSchema } from '../schema/user'

const userReponsitory = mongoose.model('user',UserSchema);      // 第一个参数为文档名称 第二个参数为实体模型

// 具体的数据库操作实现
class UserModel {

    // 查找所有
    public getAll = () => {
        return new Promise(resolve => {
            let userList: Array<Object> = [];
            const query = userReponsitory.find({});
            query.exec((err: any, data: any) => {
                if(!err){
                    userList = data;
                }
                resolve(userList);
            });
        });
    }

    // 插入数据
    public insertOne = (user: any) => {
        return new Promise(resolve => {
            userReponsitory.create(user, (err: any, data: any) => {
                if(!err){
                    console.log(data);
                    user = data;
                    resolve(user);
                }else{
                    console.log(err);
                }
                
            });
        });
    }
}

export default UserModel;