import { Router } from 'express';
import { userController } from '../controllers';

const router = Router();

router.get('/', async (req, res) => {
    const users = await userController.getUserList();
    res.send(users);
});

router.post('/', (req, res) => {
    res.send('our suggestions are here post');
});

export const userRouter = router;