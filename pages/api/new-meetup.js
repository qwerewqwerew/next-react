import { MongoClient } from "mongodb";
// api/new-meetup

async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;
		const { title, image, address, description } = data;
		const client = await MongoClient.connect("mongodb+srv://admin:1234@cluster0.koxhosh.mongodb.net/study?retryWrites=true&w=majority");
		const db = client.db();
		const stydyCollection = db.collection("study");
		const result = await stydyCollection.insertOne(data);
		client.close();
		res.status(201).json({ message: "studyList 추가!" });
	}
}

export default handler;
