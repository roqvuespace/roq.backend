import express from 'express';
import helloRouter from './app.routes/hello';
import apiRouter from './app.routes/api'

const app = express();
const PORT = 4000;

app.use(express.json());

app.use('/api/hello', helloRouter);
app.use('/nr', apiRouter)

app.listen(PORT, () => {
	console.log("App is running.")
})