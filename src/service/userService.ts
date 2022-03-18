import UserModel from "../model/userModel";

class userService {
    private userModel: UserModel = new UserModel();

    // 获取所有用户
    public getAllUser: any = () => {
        return new Promise(resolve => {
            this.userModel.getAll().then(data => {
                resolve(data);
            });
        });
    }

    // 插入用户
    public addUser: any = (user: any) => {
        return new Promise(resolve => {
            this.userModel.insertOne(user).then(data => {
                resolve(data);
            });
        });
    }
}

export default userService;