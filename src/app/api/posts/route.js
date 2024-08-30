import clientPromise from "@/app/lib/mongoroute";

export async function GET(request) {
        // console.log("what you looking for",params);
    const client = await clientPromise;
    const db = client.db("next");
    const posts = await db.collection("posts").find({}).toArray();    
    return new Response(JSON.stringify(posts))
}