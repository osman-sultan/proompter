import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDb();
    const prompts = await Prompt.find({}).populate("creator");
    const response = new Response(JSON.stringify(prompts), { status: 200 });
    const url = new URL(request.url);
    url.searchParams.set("t", Date.now());
    response.headers.set(
      "Cache-Control",
      "no-cache, no-store, must-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    response.headers.set("Location", url.toString());

    return response;
  } catch (error) {
    return new Response("failed to fetch all prompts", { status: 500 });
  }
};
