import express from "express";
import routes from "./src/route"
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { DB_URL } from "./config/database.config";

class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.app.use(routes);   // 使用路由
        this.app.use(cors({     // 设置cors跨域
            origin: "*"
        }));
        this.app.use(bodyParser.json());    // 支持 application/json 类型
        this.app.use(bodyParser.urlencoded({extended: false}));     // 支持 application/x-ww-form-urlencoded
        this.setMongoConfig();      // 连接数据库
    }

    // MongoDB配置
    private setMongoConfig() {
        mongoose.Promise = global.Promise;
        mongoose.connect(DB_URL);
        mongoose.connection.on('error', (err) => {
            console.log("MongoDB连接失败, error", JSON.stringify(err));
        });
        mongoose.connection.on('open', () => {
            console.log("数据库连接成功");
        })
    }
}

export default new App().app;