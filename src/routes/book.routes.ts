
import { Router } from 'express';
import { userController } from '../controllers';

const router = Router();

router.get('/', async (req, res) => {
    const recommendations = await userController.getRecommendations();
    console.log(recommendations);
    res.send('our suggestions are here');
});

router.post('/', (req, res) => {
    res.send('our suggestions are here post');
});

export const bookRouter = router;