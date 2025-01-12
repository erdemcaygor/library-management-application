import { Router } from "express";
import { bookController, userController } from "../controllers";
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

router.post("/:userId/borrow/:bookId", [], async (req, res) => {
    const {userId, bookId} = req.params;
    try {
        const user = await userController.getUser(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const book = await bookController.getBook(bookId);
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        const transaction = await userController.borrowBook(userId, bookId);
        return res.status(200).json({ success: "Book borrowed successfully!", transaction });
    } catch {
        return res.status(500).send();
    }
});

export const userRouter = router;
