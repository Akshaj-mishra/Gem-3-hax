from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from google import genai
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_key = os.getenv("GOOGLE_API_KEY")

if not api_key:
    raise RuntimeError("GOOGLE_API_KEY not set")

try:
    client = genai.Client(api_key=api_key)
    print("Gemini AI configured successfully")
except Exception as e:
    print(f"Error configuring Gemini AI: {e}")
    client = None


@app.get("/")
def root():
    return {"message": "FastAPI backend running"}


@app.post("/chat")
async def chat(question: str = Form(...)):
    if not client:
        raise HTTPException(503, "AI service unavailable")

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=question
        )
        return {"solution": response.text}

    except Exception:
        raise HTTPException(500, "Failed to process request")
