import { Router } from "express";
import userController from "../controller/userController";

const router = Router();

// localhost:3070/user/getAllUser
router.route('/getAllUser').get(userController.getAllUser);
// localhost:3070/user/addUser
router.route("/addUser").post(userController.addUser);

export default router;
