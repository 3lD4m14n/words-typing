import { generate } from "random-words";

export async function GET(
  req: Request,
  { params }: { params: { min: string; max: string } },
) {
  const word = generate({
    minLength: parseInt(params.min),
    maxLength: parseInt(params.max),
  });

  return Response.json({
    statusCode: 200,
    word: word,
  });
}
