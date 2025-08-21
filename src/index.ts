import express from 'express';
import helloRouter from './app.routes/hello';

const app = express();
const PORT = 4000;

app.use(express.json());

app.use('/api/hello', helloRouter);

app.listen(PORT, () => {
	console.log("App is running.")
})