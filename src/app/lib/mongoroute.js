import { MongoClient } from "mongodb";
let mongoClient;
let clientPromise;
if (!clientPromise) {
mongoClient= new MongoClient("mongodb+srv://momensaleh:momen178@cluster0.o2q5lrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
clientPromise = await mongoClient.connect();
}
export default clientPromise