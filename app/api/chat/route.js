// import { HfInference } from "@huggingface/inference";
import OpenAI from "openai";
import { HuggingFaceStream,OpenAIStream, StreamingTextResponse } from "ai";
import { experimental_buildOpenAssistantPrompt } from "ai/prompts";

// Create a new HuggingFace Inference instance
// const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
console.log("MESSAGES: ", messages)
  // const response = openai.textGenerationStream({
  //   model: openai('gpt-3.5-turbo'),
  //   inputs: experimental_buildOpenAssistantPrompt(messages),
  //   parameters: {
  //     max_new_tokens: 200,
  //     // @ts-ignore (this is a valid parameter specifically in OpenAssistant models)
  //     typical_p: 0.2,
  //     repetition_penalty: 1,
  //     truncate: 1000,
  //     return_full_text: false,
  //   },
  // });
  const response = openai.createChatCompletion({
    model: openai('gpt-3.5-turbo'),
    stream: true,
   messages,
  
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
