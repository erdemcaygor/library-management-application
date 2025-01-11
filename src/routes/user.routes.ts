import { Router } from "express";
import { userController } from "../controllers";
import { body, validationResult } from "express-validator";

const router = Router();

router.get("/", async (req, res) => {
  const users = await userController.getUserList();
  res.send(users);
});

router.post(
  "/",
  [
    body("name").trim().notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {name} = req.body;
        const user = await userController.createUser(name);
        return res.status(200).json({ success: "User created successfully!", user });
    } catch(e) {
        return res.status(500).send();
    }
  }
);

export const userRouter = router;
