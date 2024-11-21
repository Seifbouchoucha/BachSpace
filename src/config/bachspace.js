import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize API key and generative AI model
const apiKey = "AIzaSyDu0HZB9Aq-uJ2RqB9kHkWoQ9NVgHhFBQE";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    console.log("Sending message:", prompt);  // Debugging: show the prompt

    const result = await chatSession.sendMessage(prompt);

    console.log("Received response:", result.response.text());  // Debugging: check the response

    return result.response.text();  // Return the response text
  } catch (error) {
    console.error("Error occurred while sending message:", error);  // Debugging: log any errors
    return null;  // Return null in case of an error
  }
}

export default run;
