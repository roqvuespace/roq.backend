import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'API Server V1 is running, welcome.' })
});

export default router;