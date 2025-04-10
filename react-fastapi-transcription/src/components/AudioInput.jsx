// import React from "react";

// const AudioInput = ({ recording, startRecording, stopRecording, sendAudio }) => (
//     <div style={boxStyle}>
//         <h2>Audio Input</h2>
//         <button style={buttonStyle(recording)} onClick={recording ? stopRecording : startRecording}>
//             {recording ? "Stop Recording" : "Start Recording"}
//         </button>
//         <input type="file" accept="audio/*" onChange={(e) => sendAudio(e.target.files[0])} style={inputStyle} />
//     </div>
// );

// const boxStyle = { background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", width: "400px", margin: "10px 0" };
// const inputStyle = { width: "100%", padding: "8px", margin: "5px 0" };
// const buttonStyle = (recording) => ({ background: recording ? "#ff4d4d" : "#4CAF50", color: "#fff", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" });

// export default AudioInput;




























import React from "react";

const AudioInput = ({ recording, startRecording, stopRecording, sendAudio }) => (
    <div style={boxStyle}>
        {/* <h2 style={{color:"#0073ff"}}>Audio Input</h2> */}
        <h2 className="news-title" style={{ display: "flex", alignItems: "center", justifyContent: "center", color:"#0073ff" }}><span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginRight: "10px" }}></span>Audio Input<span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginLeft: "10px" }}></span></h2>
        <button style={buttonStyle(recording)} onClick={recording ? stopRecording : startRecording}>
            {recording ? "Stop Recording" : "Start Recording"}
        </button>
        <input type="file" accept="audio/*" onChange={(e) => sendAudio(e.target.files[0])} style={inputStyle} />
    </div>
);

const boxStyle = { background: "#fff", padding: "20px", borderRadius: "10px", width: "800px", margin: "10px 0" };
const inputStyle = { width: "100%", padding: "8px", margin: "5px 0" };
const buttonStyle = (recording) => ({ background: recording ? "#ff4d4d" : "#4CAF50", color: "#fff", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" });

export default AudioInput;





