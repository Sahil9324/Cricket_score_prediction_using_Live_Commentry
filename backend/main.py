# from fastapi import FastAPI, File, UploadFile, Body
# from fastapi.middleware.cors import CORSMiddleware
# import whisper
# import os
# import subprocess
# import pandas as pd

# app = FastAPI()

# # Enable CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Load Whisper Model
# model = whisper.load_model("base")

# # Path to store transcriptions
# TRANSCRIPTION_FILE = "transcriptions.txt"

# # Match data folder
# MATCH_FOLDER = r"C:\Users\ashish\OneDrive\Desktop\Cricket commentry using React\backend\match"

# def save_transcription(text):
#     """Save transcription to a file."""
#     with open(TRANSCRIPTION_FILE, "a", encoding="utf-8") as file:
#         file.write(text + "\n\n")

# @app.post("/transcribe")
# async def transcribe(audio: UploadFile = File(...)):
#     file_path = "temp_audio.wav"

#     # Save uploaded file
#     with open(file_path, "wb") as buffer:
#         buffer.write(await audio.read())

#     # Transcribe audio
#     result = model.transcribe(file_path)
#     text = result["text"]

#     # Save transcription
#     save_transcription(text)

#     # Remove temp file
#     os.remove(file_path)

#     return {"transcription": text}

# @app.post("/run_jupyter")
# def run_jupyter(notebook_path: str = Body(..., embed=True)):
#     """Run the Jupyter Notebook after transcription."""
#     try:
#         subprocess.run(["jupyter", "nbconvert", "--to", "notebook", "--execute", notebook_path], check=True)
#         return {"message": "Jupyter Notebook executed successfully"}
#     except subprocess.CalledProcessError as e:
#         return {"error": str(e)}

# @app.get("/match_data")
# def match_data():
#     """Fetch match data from CSV files."""
#     try:
#         total_score_file = os.path.join(MATCH_FOLDER, "total_score.txt")
#         wickets_file = os.path.join(MATCH_FOLDER, "wickets.txt")
#         batsman_file = os.path.join(MATCH_FOLDER, "myBatsman.csv")
#         bowler_file = os.path.join(MATCH_FOLDER, "myBallers.csv")

#         # Read text files safely
#         if os.path.exists(total_score_file):
#             with open(total_score_file, "r") as f:
#                 total_score = f.read().strip()
#         else:
#             total_score = "0"

#         if os.path.exists(wickets_file):
#             with open(wickets_file, "r") as f:
#                 wickets = f.read().strip()
#         else:
#             wickets = "0"

#         # Read CSV files safely
#         if os.path.exists(batsman_file):
#             mybatsman = pd.read_csv(batsman_file).to_dict(orient="records")
#         else:
#             mybatsman = []

#         if os.path.exists(bowler_file):
#             myballer = pd.read_csv(bowler_file).to_dict(orient="records")
#         else:
#             myballer = []

#         return {
#             "total_score": total_score,
#             "wickets": wickets,
#             "mybatsman": mybatsman,
#             "myballer": myballer
#         }
#     except Exception as e:
#         return {"error": f"Error fetching match data: {str(e)}"}

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)


























# from fastapi import FastAPI, File, UploadFile, Body
# from fastapi.middleware.cors import CORSMiddleware
# import whisper
# import os
# import subprocess
# import pandas as pd
# import pickle
# import uvicorn

# app = FastAPI()

# # Enable CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Load Whisper Model
# model = whisper.load_model("base")


# PREDICTFILE = r"C:\Users\ashish\OneDrive\Desktop\Cricket commentry using React\backend\Prediction\pipe.pkl"
# # Load Prediction Model
# with open(PREDICTFILE,"rb") as f:
#     pipe = pickle.load(f)

# # Path to store transcriptions
# TRANSCRIPTION_FILE = "transcriptions.txt"

# # Match data folder
# MATCH_FOLDER = r"C:\Users\ashish\OneDrive\Desktop\Cricket commentry using React\backend\match"

# def save_transcription(text):
#     """Save transcription to a file."""
#     with open(TRANSCRIPTION_FILE, "a", encoding="utf-8") as file:
#         file.write(text + "\n\n")

# @app.post("/transcribe")
# async def transcribe(audio: UploadFile = File(...)):
#     file_path = "temp_audio.wav"

#     # Save uploaded file
#     with open(file_path, "wb") as buffer:
#         buffer.write(await audio.read())

#     # Transcribe audio
#     result = model.transcribe(file_path)
#     text = result["text"]

#     # Save transcription
#     save_transcription(text)

#     # Remove temp file
#     os.remove(file_path)

#     return {"transcription": text}

# @app.post("/run_jupyter")
# def run_jupyter(notebook_path: str = Body(..., embed=True)):
#     """Run the Jupyter Notebook after transcription."""
#     try:
#         subprocess.run(["jupyter", "nbconvert", "--to", "notebook", "--execute", notebook_path], check=True)
#         return {"message": "Jupyter Notebook executed successfully"}
#     except subprocess.CalledProcessError as e:
#         return {"error": str(e)}

# @app.get("/match_data")
# def match_data():
#     """Fetch match data from CSV files."""
#     try:
#         total_score_file = os.path.join(MATCH_FOLDER, "total_score.txt")
#         wickets_file = os.path.join(MATCH_FOLDER, "wickets.txt")
#         batsman_file = os.path.join(MATCH_FOLDER, "myBatsman.csv")
#         bowler_file = os.path.join(MATCH_FOLDER, "myBallers.csv")

#         # Read text files safely
#         total_score = open(total_score_file).read().strip() if os.path.exists(total_score_file) else "0"
#         wickets = open(wickets_file).read().strip() if os.path.exists(wickets_file) else "0"

#         # Read CSV files safely
#         mybatsman = pd.read_csv(batsman_file).to_dict(orient="records") if os.path.exists(batsman_file) else []
#         myballer = pd.read_csv(bowler_file).to_dict(orient="records") if os.path.exists(bowler_file) else []

#         return {
#             "total_score": total_score,
#             "wickets": wickets,
#             "mybatsman": mybatsman,
#             "myballer": myballer
#         }
#     except Exception as e:
#         return {"error": f"Error fetching match data: {str(e)}"}

# @app.post("/predict_score")
# def predict_score(data: dict = Body(...)):
#     """Predict final cricket score based on input match data."""
#     try:
#         input_df = pd.DataFrame({
#             'batting_team': [data['batting_team']],
#             'bowling_team': [data['bowling_team']],
#             'city': [data['city']],
#             'current_score': [data['current_score']],
#             'balls_left': [data['balls_left']],
#             'wickets_left': [data['wickets_left']],
#             'crr': [data['crr']],
#             'last_five': [data['last_five']]
#         })

#         result = pipe.predict(input_df)
#         predicted_score = int(result[0])

#         return {"predicted_score": predicted_score}
#     except Exception as e:
#         return {"error": f"Prediction error: {str(e)}"}

# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)





























from fastapi import FastAPI, File, UploadFile, Body
from fastapi.middleware.cors import CORSMiddleware
import whisper
import os
import subprocess
import pandas as pd
import pickle
import uvicorn

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Whisper Model
model = whisper.load_model("base")

PREDICTFILE = r"C:\Users\ashish\OneDrive\Desktop\Cricket commentry using React\backend\Prediction\pipe.pkl"
# Load Prediction Model
with open(PREDICTFILE,"rb") as f:
    pipe = pickle.load(f)

MATCH_DETAILS_FOLDER = r"C:\Users\ashish\OneDrive\Desktop\Cricket commentry using React\backend\match_details"

# Ensure the folder exists
os.makedirs(MATCH_DETAILS_FOLDER, exist_ok=True)

# Paths for storing match details inside the new folder
BAT_FILE = os.path.join(MATCH_DETAILS_FOLDER, "batting_team.txt")
BOWL_FILE = os.path.join(MATCH_DETAILS_FOLDER, "bowling_team.txt")
CITY_FILE = os.path.join(MATCH_DETAILS_FOLDER, "city.txt")

def save_match_details(batting_team, bowling_team, city):
    """Save batting team, bowling team, and city to separate files."""
    with open(BAT_FILE, "w", encoding="utf-8") as file:
        file.write(batting_team)
    
    with open(BOWL_FILE, "w", encoding="utf-8") as file:
        file.write(bowling_team)
    
    with open(CITY_FILE, "w", encoding="utf-8") as file:
        file.write(city)

@app.post("/store_match_details")
def store_match_details(data: dict = Body(...)):
    """Store batting team, bowling team, and city in separate text files."""
    try:
        batting_team = data["batting_team"]
        bowling_team = data["bowling_team"]
        city = data["city"]
        save_match_details(batting_team, bowling_team, city)
        return {"message": "Match details stored successfully"}
    except Exception as e:
        return {"error": f"Error storing match details: {str(e)}"}

@app.get("/match_details")
def get_match_details():
    """Fetch batting team, bowling team, and city from stored files."""
    try:
        # Read values from text files
        batting_team = open(BAT_FILE).read().strip() if os.path.exists(BAT_FILE) else "Unknown"
        bowling_team = open(BOWL_FILE).read().strip() if os.path.exists(BOWL_FILE) else "Unknown"
        city = open(CITY_FILE).read().strip() if os.path.exists(CITY_FILE) else "Unknown"

        return {
            "batting_team": batting_team,
            "bowling_team": bowling_team,
            "city": city
        }
    except Exception as e:
        return {"error": f"Error fetching match details: {str(e)}"}
    
# Path to store transcriptions
TRANSCRIPTION_FILE = "transcriptions.txt"

# Match data folder
MATCH_FOLDER = r"C:\Users\ashish\OneDrive\Desktop\Cricket commentry using React\backend\match"

def save_transcription(text):
    """Save transcription to a file."""
    with open(TRANSCRIPTION_FILE, "a", encoding="utf-8") as file:
        file.write(text + "\n\n")

@app.post("/transcribe")
async def transcribe(audio: UploadFile = File(...)):
    file_path = "temp_audio.wav"

    # Save uploaded file
    with open(file_path, "wb") as buffer:
        buffer.write(await audio.read())

    # Transcribe audio
    result = model.transcribe(file_path)
    text = result["text"]

    # Save transcription
    save_transcription(text)

    # Remove temp file
    os.remove(file_path)

    return {"transcription": text}

@app.post("/run_jupyter")
def run_jupyter(notebook_path: str = Body(..., embed=True)):
    """Run the Jupyter Notebook after transcription."""
    try:
        subprocess.run(["jupyter", "nbconvert", "--to", "notebook", "--execute", notebook_path], check=True)
        return {"message": "Jupyter Notebook executed successfully"}
    except subprocess.CalledProcessError as e:
        return {"error": str(e)}

@app.get("/match_data")
def match_data():
    """Fetch match data from CSV files."""
    try:
        total_score_file = os.path.join(MATCH_FOLDER, "total_score.txt")
        wickets_file = os.path.join(MATCH_FOLDER, "wickets.txt")
        batsman_file = os.path.join(MATCH_FOLDER, "myBatsman.csv")
        bowler_file = os.path.join(MATCH_FOLDER, "myBallers.csv")

        # Read text files safely
        total_score = open(total_score_file).read().strip() if os.path.exists(total_score_file) else "0"
        wickets = open(wickets_file).read().strip() if os.path.exists(wickets_file) else "0"

        # Read CSV files safely
        mybatsman = pd.read_csv(batsman_file).to_dict(orient="records") if os.path.exists(batsman_file) else []
        myballer = pd.read_csv(bowler_file).to_dict(orient="records") if os.path.exists(bowler_file) else []

        return {
            "total_score": total_score,
            "wickets": wickets,
            "mybatsman": mybatsman,
            "myballer": myballer
        }
    except Exception as e:
        return {"error": f"Error fetching match data: {str(e)}"}

@app.post("/predict_score")
def predict_score(data: dict = Body(...)):
    """Predict final cricket score based on input match data."""
    try:
        input_df = pd.DataFrame({
            'batting_team': [data['batting_team']],
            'bowling_team': [data['bowling_team']],
            'city': [data['city']],
            'current_score': [data['current_score']],
            'balls_left': [data['balls_left']],
            'wickets_left': [data['wickets_left']],
            'crr': [data['crr']],
            'last_five': [data['last_five']]
        })

        result = pipe.predict(input_df)
        predicted_score = int(result[0])

        return {"predicted_score": predicted_score}
    except Exception as e:
        return {"error": f"Prediction error: {str(e)}"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)

