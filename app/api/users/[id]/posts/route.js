import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDb();

    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompt", {
      status: 500,
    });
  }
};
