// import { useState, useEffect } from "react";
// import axios from "axios";
// import MatchData from "../MatchData.jsx";

// function UserPrediction() {
//     const [transcription, setTranscription] = useState("");
//     const [matchData, setMatchData] = useState(null);
//     const [matchDetails, setMatchDetails] = useState({ batting_team: "", bowling_team: "", city: "" });

//     useEffect(() => {
//         fetchTranscription();
//         fetchMatchData();
//         fetchMatchDetails();
//     }, []);

//     const fetchTranscription = async () => {
//         try {
//             const response = await axios.get("http://127.0.0.1:8000/transcription.txt");
//             setTranscription(response.data);
//         } catch (error) {
//             console.error("Error fetching transcription:", error);
//         }
//     };

//     const fetchMatchData = async () => {
//         try {
//             const response = await axios.get("http://127.0.0.1:8000/match_data");
//             setMatchData(response.data);
//         } catch (error) {
//             console.error("Error fetching match data:", error);
//         }
//     };

//     const fetchMatchDetails = async () => {
//         try {
//             const response = await axios.get("http://127.0.0.1:8000/match_details");
//             setMatchDetails(response.data);
//         } catch (error) {
//             console.error("Error fetching match details:", error);
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
//             paddingLeft: "280px",
//             paddingRight: "100px",
//             width:"1150px"
//         }}>
//         <div>
//             <h2>Match Details</h2>
//             <p><strong>Batting Team:</strong> {matchDetails.batting_team}</p>
//             <p><strong>Bowling Team:</strong> {matchDetails.bowling_team}</p>
//             <p><strong>City:</strong> {matchDetails.city}</p>

//             <MatchData matchData={matchData} />
//         </div>
//         </div>
//         </>
//     );
// }

// export default UserPrediction;






















import { useState, useEffect } from "react";
import axios from "axios";
import MatchData from "../MatchData.jsx";
import PredictedScore from "../PredictedScore.jsx";

function UserPrediction() {
    const [transcription, setTranscription] = useState("");
    const [matchData, setMatchData] = useState(null);
    const [matchDetails, setMatchDetails] = useState({ batting_team: "", bowling_team: "", city: "" });
    const [predictedScore, setPredictedScore] = useState(null); // ✅ Fix: Added missing state

    useEffect(() => {
        fetchTranscription();
        fetchMatchData();
        fetchMatchDetails();
    }, []);

    useEffect(() => {
        if (matchData) {
            predictFinalScore();
        }
    }, [matchData, matchDetails]); // ✅ Trigger prediction when match data or details change

    const fetchTranscription = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/transcription.txt");
            setTranscription(response.data);
        } catch (error) {
            console.error("Error fetching transcription:", error);
        }
    };

    const fetchMatchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/match_data");
            setMatchData(response.data);
        } catch (error) {
            console.error("Error fetching match data:", error);
        }
    };

    const fetchMatchDetails = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/match_details");
            setMatchDetails(response.data);
        } catch (error) {
            console.error("Error fetching match details:", error);
        }
    };

    const predictFinalScore = async () => {
        if (!matchData) return;

        try {
            const current_score = parseInt(matchData.total_score) || 0;
            const wickets_left = 10 - (parseInt(matchData.wickets) || 0);
            const overs_faced = parseFloat(matchData.overs) || 1; // ✅ Avoid division by zero
            const crr = current_score / overs_faced;
            
            const response = await axios.post("http://127.0.0.1:8000/predict_score", {
                batting_team: matchDetails.batting_team,
                bowling_team: matchDetails.bowling_team,
                city: matchDetails.city,
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
            paddingLeft: "280px",
            paddingRight: "100px",
            width:"1150px"
        }}>
        <div>
        <h2 className="news-title" style={{ display: "flex", alignItems: "center", justifyContent: "center", color:"#0073ff" }}><span style={{ flexGrow: 1, height: "0.5px", backgroundColor: "black", marginRight: "10px" }}></span>Match Details<span style={{ flexGrow: 1, height: "0.5px", backgroundColor: "black", marginLeft: "10px" }}></span></h2>
            <p><strong>Batting Team:</strong> {matchDetails.batting_team}</p>
            <p><strong>Bowling Team:</strong> {matchDetails.bowling_team}</p>
            <p><strong>City:</strong> {matchDetails.city}</p>

            <MatchData matchData={matchData} />

            <PredictedScore predictedScore={predictedScore} /> 
        </div>
        </div>
        </>
    );
}

export default UserPrediction;
