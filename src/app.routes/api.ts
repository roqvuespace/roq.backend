import { Router } from 'express';
import v1 from '../app.api/api.routes/api.v1/v1'

const router = Router();

router.use('/api/v1', v1);


export default router;