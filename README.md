The project focuses on cricket score prediction based on live commentary.
It accepts audio input either through file upload or live recording, and uses Whisper AI to convert the audio into text.

Next, NLP techniques are applied to extract ball-by-ball data from the text, which serves as the input for predicting the score.

An admin can provide the teams, location, and audio file to the system to generate a scorecard and predict the final score.

Users can log in to view the scorecard and the predicted score.

For runnig project
Go to backend 
   pip install fastapi uvicorn python-multipart pandas scikit-learn whisper openai ffmpeg-python

and for whisper-ffmpeg
   download manually from ffmpeg.org → unzip → add bin folder to PATH.

Go to react-Fastapi-transcription
    npm install
    npm init -y
    npm install react react-dom
    npm install -D vite
    npm install @vitejs/plugin-react

To start a project
 Path to backend-  uvicorn main:app --reload  
 Path to react-fastapi-transcription  npm run dev    



**Home Pgae**

 ![alt text](Images/Home1.png)
 ![alt text](Images/Home2.png)









**News Page**

 ![alt text](Images/News.png)









**About Page**

 ![alt text](Images/About.png)








**Login Page**

 ![alt text](Images/Login.png)









**Login as Admin**

 ![alt text](Images/Admin1.png)
 ![alt text](Images/Admin2.png)







**Login as User**

 ![alt text](Images/User1.png)
 ![alt text](Images/User2.png)