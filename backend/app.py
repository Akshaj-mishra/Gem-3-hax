from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import google as genai
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


try:
    genai.configure(api_key=api_key)
    gemini_model = genai.GenerativeModel("gemini-3-flash-preview")
    print("Gemini AI configured successfully")
    
    
except Exception as e:
    print(f" Error configuring Gemini AI: {e}")
    gemini_model = None


@app.get("/")
def root():
    return {"message": " FastAPI backend is running and CORS is enabled!"}


@app.post("/chat")
async def chat(question: str = Form("")):

    try:
        response = gemini_model.generate_content(question)

        return {
            "solution": response.text,
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Processing error: {str(e)}")

