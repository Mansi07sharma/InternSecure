import { GoogleGenerativeAI } from "@google/generative-ai";

const api = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = api.getGenerativeModel({ model: "gemini-1.5-flash" });

function cleanResponse(text) {
  // Remove code block markers like ```json or ```
  text = text.replace(/```json\n?/g, '');
  text = text.replace(/```\n?/g, '');
  text = text.trim();

  // If it's a quoted string (escaped JSON), parse it
  if (text.startsWith('"') && text.endsWith('"')) {
    text = JSON.parse(text); // First parse to unescape characters
  }

  // If it's now a string that looks like a JSON object, parse again
  if (typeof text === 'string' && text.startsWith('{') && text.endsWith('}')) {
    text = JSON.parse(text); // Now we get actual JS object
  }

  return text; // Final structured object
}

export async function POST(req) {
    const body = await req.json();
    const description = body.desc;
    console.log(description)
    const prompt = `
Analyze this internship description:

"${description}"

Return a JSON object with keys: scam_score (0-100), label (Fake, Real, or Suspicious), red_flags (array of strings), and analysis (detailed text).
`;
    try {
        const content = await model.generateContent(prompt);
        const response = content.response;
        const cleanedText = cleanResponse(response.text());
        return new Response(JSON.stringify(cleanedText), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
}