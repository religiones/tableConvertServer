// 统一配置全局路由
import { Router } from "express";
import User from './user'

const routes = Router();

// localhost:3070/user  
routes.use('/user', User);

export default routes;
