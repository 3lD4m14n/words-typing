import { generate } from "random-words";

export async function GET() {
  const word = generate();

  return Response.json({
    statusCode: 200,
    word,
  });
}
