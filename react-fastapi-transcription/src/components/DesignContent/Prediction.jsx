// import { useState, useRef } from "react";
// import MatchDetails from "../Matchdetails";
// import AudioInput from "../AudioInput.jsx";
// import Transcription from "../Transcription.jsx";
// import MatchData from "../MatchData.jsx";
// import PredictedScore from "../PredictedScore.jsx";
// import RecordRTC from "recordrtc";
// import axios from "axios";

// function Prediction() {
//     const [recording, setRecording] = useState(false);
//     const [transcription, setTranscription] = useState("");
//     const [matchData, setMatchData] = useState(null);
//     const [predictedScore, setPredictedScore] = useState(null);
//     const [battingTeam, setBattingTeam] = useState("India");
//     const [bowlingTeam, setBowlingTeam] = useState("Australia");
//     const [city, setCity] = useState("Mumbai");

//     const startRecording = async () => {
//         const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//         recorderRef.current = new RecordRTC(stream, { type: "audio" });
//         recorderRef.current.startRecording();
//         setRecording(true);
//     };

//     const stopRecording = async () => {
//         recorderRef.current.stopRecording(() => {
//             const blob = recorderRef.current.getBlob();
//             sendAudio(blob);
//         });
//         setRecording(false);
//     };

//     const handleFileUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setAudioFile(file);
//             sendAudio(file);
//         }
//     };

//     const sendAudio = async (blob) => {
//         const formData = new FormData();
//         formData.append("audio", blob, "audio.wav");

//         try {
//             const response = await axios.post("http://127.0.0.1:8000/transcribe", formData);
//             setTranscription(response.data.transcription);
//             triggerJupyterNotebook();
//         } catch (error) {
//             console.error("Error transcribing:", error);
//         }
//     };

//     const triggerJupyterNotebook = async () => {
//         try {
//             await axios.post("http://127.0.0.1:8000/run_jupyter", { 
//                 notebook_path: "C:/Users/ashish/OneDrive/Desktop/Cricket commentry using React/backend/Untitled.ipynb"
//             });
//             setTimeout(fetchMatchData, 3000);
//         } catch (error) {
//             console.error("Error triggering Jupyter Notebook:", error);
//         }
//     };

//     const fetchMatchData = async () => {
//         try {
//             const response = await axios.get("http://127.0.0.1:8000/match_data");
//             setMatchData(response.data);
//             predictFinalScore(response.data);
//         } catch (error) {
//             console.error("Error fetching match data:", error);
//         }
//     };

//     const predictFinalScore = async (matchData) => {
//         if (!matchData) return;
//         try {
//             const response = await axios.post("http://127.0.0.1:8000/predict_score", {
//                 batting_team: battingTeam,
//                 bowling_team: bowlingTeam,
//                 city: city,
//                 current_score: parseInt(matchData.total_score) || 0,
//                 balls_left: 120,
//                 wickets_left: 10 - parseInt(matchData.wickets) || 10,
//                 crr: parseInt(matchData.total_score) / 20 || 0,
//                 last_five: 30
//             });
//             setPredictedScore(response.data.predicted_score);
//         } catch (error) {
//             console.error("Error predicting score:", error);
//         }
//     };
    
//     return (
//         <>
//         <style>
//           {`
//             body {
//               font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
//               background-color: #ffffff;
//               margin: 0;
//               padding: 0;
//               width: 100%;
//             }
//         `}
//       </style>              
//         <div style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: "100vh",
//             // backgroundColor: "#f5f5f5",
//             paddingLeft: "280px",
//             paddingRight: "100px",
//             width:"1150px"
//         }}>
//         <div>
//             <MatchDetails {...{ battingTeam, setBattingTeam, bowlingTeam, setBowlingTeam, city, setCity }} />
//             <AudioInput {...{ recording, startRecording, stopRecording, sendAudio }} />
//             <Transcription transcription={transcription} />
//             <MatchData matchData={matchData} />
//             <PredictedScore predictedScore={predictedScore} />
//         </div>
//         </div>
//         </>
//     );
// }

// export default Prediction;





















import { useState, useRef } from "react";
import MatchDetails from "../Matchdetails";
import AudioInput from "../AudioInput.jsx";
import Transcription from "../Transcription.jsx";
import MatchData from "../MatchData.jsx";
import PredictedScore from "../PredictedScore.jsx";
import RecordRTC from "recordrtc";
import axios from "axios";

function Prediction() {
    const [recording, setRecording] = useState(false);
    const [transcription, setTranscription] = useState("");
    const [matchData, setMatchData] = useState(null);
    const [predictedScore, setPredictedScore] = useState(null);
    const [battingTeam, setBattingTeam] = useState("India");
    const [bowlingTeam, setBowlingTeam] = useState("Australia");
    const [city, setCity] = useState("Mumbai");

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        recorderRef.current = new RecordRTC(stream, { type: "audio" });
        recorderRef.current.startRecording();
        setRecording(true);
    };

    const stopRecording = async () => {
        recorderRef.current.stopRecording(() => {
            const blob = recorderRef.current.getBlob();
            sendAudio(blob);
        });
        setRecording(false);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            sendAudio(file);
        }
    };

    const sendAudio = async (blob) => {
        const formData = new FormData();
        formData.append("audio", blob, "audio.wav");

        try {
            const response = await axios.post("http://127.0.0.1:8000/transcribe", formData);
            setTranscription(response.data.transcription);

            // Send teams and city data to backend
            await axios.post("http://127.0.0.1:8000/store_match_details", {
                batting_team: battingTeam,
                bowling_team: bowlingTeam,
                city: city
            });

            triggerJupyterNotebook();
        } catch (error) {
            console.error("Error transcribing:", error);
        }
    };

    const triggerJupyterNotebook = async () => {
        try {
            await axios.post("http://127.0.0.1:8000/run_jupyter", { 
                notebook_path: "C:/Users/ashish/OneDrive/Desktop/Cricket commentry using React/backend/Untitled.ipynb"
            });
            setTimeout(fetchMatchData, 3000);
        } catch (error) {
            console.error("Error triggering Jupyter Notebook:", error);
        }
    };

    const fetchMatchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/match_data");
            setMatchData(response.data);
            predictFinalScore(response.data);
        } catch (error) {
            console.error("Error fetching match data:", error);
        }
    };

    const predictFinalScore = async (matchData) => {
        if (!matchData) return;
        try {
            const response = await axios.post("http://127.0.0.1:8000/predict_score", {
                batting_team: battingTeam,
                bowling_team: bowlingTeam,
                city: city,
                current_score: parseInt(matchData.total_score) || 0,
                balls_left: 120,
                wickets_left: 10 - parseInt(matchData.wickets) || 10,
                crr: parseInt(matchData.total_score) / 20 || 0,
                last_five: 30
            });
            setPredictedScore(response.data.predicted_score);
        } catch (error) {
            console.error("Error predicting score:", error);
        }
    };
    
    return (
        <>
        <style>
          {`
            body {
              font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;
              background-color: #ffffff;
              margin: 0;
              padding: 0;
              width: 100%;
            }
        `}
      </style>              
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            // backgroundColor: "#f5f5f5",
            paddingLeft: "280px",
            paddingRight: "100px",
            width:"1150px"
        }}>
        <div>
            <MatchDetails {...{ battingTeam, setBattingTeam, bowlingTeam, setBowlingTeam, city, setCity }} />
            <AudioInput {...{ recording, startRecording, stopRecording, sendAudio }} />
            <Transcription transcription={transcription} />
            <MatchData matchData={matchData} />
            <PredictedScore predictedScore={predictedScore} />
        </div>
        </div>
        </>
    );
}

export default Prediction;