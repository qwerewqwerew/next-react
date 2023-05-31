
import { MongoClient } from "mongodb";

async function saveData(req, res) {
	if (req.method === "POST") {
		const data = req.body;
		const { title, image, description, address } = data;
		const client = await MongoClient.connect("mongodb+srv://admin:1234@study-cluster.q9t7mcx.mongodb.net/?retryWrites=true&w=majority");
		const db = client.db();
		const stydyCollection = db.collection("study");
		const result = await stydyCollection.insertOne(data);
		client.close();
		res.status(201).json({ message: "studyList 추가!" });
	}
	const data = await response.json();
}
export default saveData;
