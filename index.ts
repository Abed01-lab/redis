import express from 'express';
import { createClient } from 'redis';


const app = express();
const client = createClient();

app.use(express.json());

app.post('/', async (req, res) => {
	console.log(req.body)
	const { key_field, value_field } = req.body
	console.log(key_field, value_field)
	await client.connect();
	const data = await client.set(key_field, value_field)
	await client.expire(key_field, 10)
	await client.disconnect();
  	res.json(data);
});

app.get('/', async (req, res) => {
  await client.connect();
  const data = await client.keys("*")
  await client.disconnect();
  res.json(data);
});

app.get('/:key', async (req, res, ) => {
	const key_field = req.params.key;
	await client.connect();
	const data = await client.get(key_field)
	await client.disconnect();
	res.json(data);
});

app.delete('/:key', async (req, res, ) => {
	const key_field = req.params.key;
	await client.connect();
	const data = await client.del(key_field)
	await client.disconnect();
	res.json(data);
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
