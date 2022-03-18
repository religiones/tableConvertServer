import { Request, Response } from "express";
import UserService from "../service/userService"
import STATUS from '../../config/server.status'

class userController {
    private userService = new UserService()
    
    /**
     * 查询所有用户
     * @param req 
     * @param res 
     */
    public getAllUser = async (req: Request, res: Response) => {
        this.userService.getAllUser().then((data: any) => {
            res.send({
                status: STATUS.SUCCESS,
                data
            });
        }).catch((err: any) => {
            res.send({
                status: STATUS.FAILED,
                message: "查询失败"
            });
        });
    }

    /**
     * 添加用户
     * @param req 
     * @param res 
     */
    public addUser = async (req: Request, res: Response) => {
        const user = req.body;
        console.log(user)
        this.userService.addUser(user).then((data: any) => {
            res.send({
                status: STATUS.SUCCESS,
                data
            });
        }).catch((err: any) => {
            res.send({
                status: STATUS.FAILED,
                message: "添加失败"
            });
        });
    }
}

export default new userController();