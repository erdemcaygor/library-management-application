
import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { bookController } from '../controllers';

const router = Router();

router.get("/", async (req, res) => {
    const books = await bookController.getBookList();
    res.send(books);
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
          const book = await bookController.createBook(name);
          return res.status(200).json({ success: "Book created successfully!", book });
      } catch(e) {
          return res.status(500).send();
      }
    }
  );

export const bookRouter = router;