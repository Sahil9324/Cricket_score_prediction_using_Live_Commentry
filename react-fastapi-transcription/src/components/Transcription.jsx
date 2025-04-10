// import React from "react";

// const Transcription = ({ transcription }) => {
//     return (
//         <div style={boxStyle}>
//             <h2>Transcription</h2>
//             <p><strong>{transcription || "No transcription available"}</strong></p>
//         </div>
//     );
// };

// const boxStyle = { background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", width: "400px", margin: "20px auto" };

// export default Transcription;



























import React from "react";

const Transcription = ({ transcription }) => {
    return (
        <div style={boxStyle}>
            {/* <h2 style={{color:"#0073ff"}}>Transcription</h2> */}
            <h2 className="news-title" style={{ display: "flex", alignItems: "center", justifyContent: "center", color:"#0073ff" }}><span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginRight: "10px" }}></span>Transcription<span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginLeft: "10px" }}></span></h2>
            <p><strong>{transcription || "No transcription available"}</strong></p>
        </div>
    );
};

const boxStyle = { background: "#fff", padding: "20px", borderRadius: "10px", width: "800px", margin: "20px auto" };

export default Transcription;
