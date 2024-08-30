import clientPromise from "@/app/lib/mongoroute";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const id = Number(searchParams.get('id'));
    console.log(id);
    const client = await clientPromise;
    const db = client.db("next");
    if (id) {
        const post = await db.collection("posts").findOne({ _id: id });
        return new Response(JSON.stringify(post))
    }
    const posts = await db.collection("posts").find({}).toArray();    
    return new Response(JSON.stringify(posts))
}