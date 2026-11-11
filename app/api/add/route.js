
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Received body:", body);

    const client = await clientPromise;
    const db = client.db("LinkUp");
    const collection = db.collection("Links");

    const doc = await collection.findOne({
      handle: body.handle,
    });

    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "This LinkUp already exists",
        result: null,
      });
    }

    const result = await collection.insertOne(body);

    return Response.json({
      success: true,
      error: false,
      message: "Generated Successfully!",
      result,
    });
  } catch (error) {
    console.error("API Error:", error);

    return Response.json(
      {
        success: false,
        error: true,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
