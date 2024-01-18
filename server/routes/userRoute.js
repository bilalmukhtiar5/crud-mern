import express from "express";
const route = express.Router();
import { create, getAll } from "../controller/userController.js";


route.post("/create", create);

route.get("./getall", getAll);

export default route;