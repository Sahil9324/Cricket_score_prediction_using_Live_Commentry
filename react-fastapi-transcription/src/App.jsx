
// import { useState, useRef } from "react";
// import axios from "axios";
// import RecordRTC from "recordrtc";

// const teams = ['Australia', 'India', 'Bangladesh', 'New Zealand', 'South Africa', 'England', 'West Indies', 
//     'Afghanistan', 'Pakistan', 'Sri Lanka'];
// const cities = ['Colombo', 'Mirpur', 'Johannesburg', 'Dubai', 'Auckland', 'Cape Town', 'London', 'Pallekele', 
//     'Barbados', 'Sydney', 'Melbourne', 'Durban', 'St Lucia', 'Wellington', 'Lauderhill', 'Hamilton', 
//     'Centurion', 'Manchester', 'Abu Dhabi', 'Mumbai', 'Nottingham', 'Southampton', 'Mount Maunganui', 
//     'Chittagong', 'Kolkata', 'Lahore', 'Delhi', 'Nagpur', 'Chandigarh', 'Adelaide', 'Bangalore', 
//     'St Kitts', 'Cardiff', 'Christchurch', 'Trinidad'];

// function App() {
//     const [recording, setRecording] = useState(false);
//     const [transcription, setTranscription] = useState("");
//     const [matchData, setMatchData] = useState(null);
//     const [predictedScore, setPredictedScore] = useState(null);
//     const [battingTeam, setBattingTeam] = useState(teams[0]);
//     const [bowlingTeam, setBowlingTeam] = useState(teams[1]);
//     const [city, setCity] = useState(cities[0]);
//     const [audioFile, setAudioFile] = useState(null);
//     const recorderRef = useRef(null);

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
//         <div style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: "100vh",
//             backgroundColor: "#f5f5f5",
//             paddingLeft: "100px",
//             paddingRight: "100px",
//             width:"1300px"
//         }}>
//             <div style={{ width: "50%", maxWidth: "600px"}}>
//             <h1 style={{ color: "#333" }}>Cricket Score Prediction</h1>

//             {/* Match Details */}
//             <div style={boxStyle}>
//                 <h2>Match Details</h2>
//                 <label>Batting Team:</label>
//                 <select style={inputStyle} value={battingTeam} onChange={(e) => setBattingTeam(e.target.value)}>
//                     {teams.map(team => <option key={team} value={team}>{team}</option>)}
//                 </select>

//                 <label>Bowling Team:</label>
//                 <select style={inputStyle} value={bowlingTeam} onChange={(e) => setBowlingTeam(e.target.value)}>
//                     {teams.map(team => <option key={team} value={team}>{team}</option>)}
//                 </select>

//                 <label>City:</label>
//                 <select style={inputStyle} value={city} onChange={(e) => setCity(e.target.value)}>
//                     {cities.map(c => <option key={c} value={c}>{c}</option>)}
//                 </select>
//             </div>

//             {/* Audio Input */}
//             <div style={boxStyle}>
//                 <h2>Audio Input</h2>
//                 <button style={buttonStyle(recording)} onClick={recording ? stopRecording : startRecording}>
//                     {recording ? "Stop Recording" : "Start Recording"}
//                 </button>
//                 <input type="file" accept="audio/*" onChange={(e) => sendAudio(e.target.files[0])} style={inputStyle} />
//             </div>

//             {/* Transcription */}
//             <div style={boxStyle}>
//                 <h2>Transcription</h2>
//                 <p><strong>{transcription || "No transcription available"}</strong></p>
//             </div>

//             {/* Match Data */}
//             {matchData && (
//                 <div style={boxStyle}>
//                     <h2>Match Data</h2>
//                     <p><strong>Total Score:</strong> {matchData.total_score}</p>
//                     <p><strong>Wickets:</strong> {matchData.wickets}</p>

//                     {/* Batsman Table */}
//                     {matchData.mybatsman.length > 0 && (
//                         <>
//                             <h3>Batsmen</h3>
//                             <table style={tableStyle}>
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th><th>Status</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>SR</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {matchData.mybatsman.map((batsman, index) => (
//                                         <tr key={index}>
//                                             <td>{batsman.Batsman}</td><td>{batsman.status}</td><td>{batsman.R}</td><td>{batsman.B}</td><td>{batsman["4s"]}</td><td>{batsman["6s"]}</td><td>{batsman.SR}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </>
//                     )}

//                     {/* Bowler Table */}
//                     {matchData.myballer.length > 0 && (
//                         <>
//                             <h3>Bowlers</h3>
//                             <table style={tableStyle}>
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th><th>Overs</th><th>Runs</th><th>Wickets</th><th>EC</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {matchData.myballer.map((bowler, index) => (
//                                         <tr key={index}>
//                                             <td>{bowler.Baller}</td><td>{bowler.O}</td><td>{bowler.R}</td><td>{bowler.W}</td><td>{bowler.EC}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </>
//                     )}
//                 </div>
//             )}
//             {predictedScore && (
//                 <div style={boxStyle}>
//                     <h2>Predicted Score</h2>
//                     <p><strong>{predictedScore}</strong></p>
//                 </div>
//             )}
//             </div>
//         </div>
//     );
// }

// const boxStyle = { background: "#fff", padding: "50px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", width: "400px", margin: "20px auto" };
// const inputStyle = { width: "100%", padding: "8px", margin: "5px 0" };
// const buttonStyle = (recording) => ({ background: recording ? "#ff4d4d" : "#4CAF50", color: "#fff", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" });
// const tableStyle = { width: "100%", borderCollapse: "collapse" };

// export default App;














// ha main codde aheeeeeeeeeeeeeeee





// import { useState, useRef } from "react";
// import MatchDetails from "./components/Matchdetails";
// import AudioInput from "./components/AudioInput";
// import Transcription from "./components/Transcription";
// import MatchData from "./components/MatchData";
// import PredictedScore from "./components/PredictedScore";
// import RecordRTC from "recordrtc";
// import axios from "axios";

// function App() {
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
//         <div style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: "100vh",
//             backgroundColor: "#f5f5f5",
//             paddingLeft: "100px",
//             paddingRight: "100px",
//             width:"1300px"
//         }}>
//         <div>
//             <MatchDetails {...{ battingTeam, setBattingTeam, bowlingTeam, setBowlingTeam, city, setCity }} />
//             <AudioInput {...{ recording, startRecording, stopRecording, sendAudio }} />
//             <Transcription transcription={transcription} />
//             <MatchData matchData={matchData} />
//             <PredictedScore predictedScore={predictedScore} />
//         </div>
//         </div>
//     );
// }

// export default App;












// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/DesignContent/Navbar";
// import Footer from "./components/DesignContent/footer";
// import HomePage from "./components/DesignContent/Home";
// import Prediction from "./components/DesignContent/Prediction";
// import About from "./components/DesignContent/About";
// import Login from "./components/DesignContent/Auth/Login_btn";
// import Signup from "./components/DesignContent/Auth/Signup_btn";

// function App() {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/prediction" element={<Prediction />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//             </Routes>
//             <Footer/>
//         </Router>
//     );
// }

// export default App;







import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/DesignContent/Navbar';
import Footer from './components/DesignContent/Footer';
import HomePage from './components/DesignContent/Home';
import Prediction from "./components/DesignContent/Prediction";
import About from './components/DesignContent/About';
import Login from './components/DesignContent/Auth/Login_btn';
import Signup from './components/DesignContent/Auth/Signup_btn';
import UserPrediction from "./components/DesignContent/Userprediction";
import CricketNews from './components/DesignContent/CricketNews';


const RoleBasedRoute = ({ userType, adminComponent: AdminComponent, userComponent: UserComponent }) => {
  if (userType === 'admin') {
    return <AdminComponent />;
  } else if (userType === 'user') {
    return <UserComponent />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

function App() {
  const [userType, setUserType] = useState(localStorage.getItem('userType'));

  useEffect(() => {
    if (userType) {
      localStorage.setItem('userType', userType);
    } else {
      localStorage.removeItem('userType');
    }
  }, [userType]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setUserType={setUserType} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/news" element={<CricketNews />} />
        <Route
          path="/prediction"
          element={
            <RoleBasedRoute
              userType={userType}
              adminComponent={Prediction}
              userComponent={UserPrediction}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


















