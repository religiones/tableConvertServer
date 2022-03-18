import { Router } from "express";
import userController from "../controller/userController";

const router = Router();

// localhost:3070/user/getAllUser
router.get('/getAllUser', userController.getAllUser);
// localhost:3070/user/addUser
router.post('/addlUser', userController.addUser);

export default router;
