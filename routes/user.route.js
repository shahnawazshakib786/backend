import express from "express"
//import { getUserSavedPosts, savePost } from "../controllers/user.controller.js"

const router = express.Router()

//router.get("/saved", getUserSavedPosts)
//router.patch("/save", savePost)

router.get("/", (req, res) => {
  res.status(200).send("Hello postman!");
})

export default router 