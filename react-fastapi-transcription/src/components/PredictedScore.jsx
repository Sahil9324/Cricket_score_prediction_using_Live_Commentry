// import React from "react";

// const PredictedScore = ({ predictedScore }) => {
//     if (!predictedScore) return null;
    
//     return (
//         <div style={boxStyle}>
//             <h2>Predicted Score</h2>
//             <p><strong>{predictedScore}</strong></p>
//         </div>
//     );
// };

// const boxStyle = { background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", width: "400px", margin: "20px auto" };

// export default PredictedScore;























import React from "react";

const PredictedScore = ({ predictedScore }) => {
    if (!predictedScore) return null;
    
    return (
        <div style={boxStyle}>
            {/* <h2 style={{color:"#0073ff"}}>Predicted Score</h2> */}
            <h2 className="news-title" style={{ display: "flex", alignItems: "center", justifyContent: "center", color:"#0073ff" }}><span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginRight: "10px" }}></span>Predicted Score<span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginLeft: "10px" }}></span></h2>
            <p><strong>{predictedScore}</strong></p>
        </div>
    );
};

const boxStyle = { background: "#fff", padding: "20px", borderRadius: "10px", width: "800px", margin: "20px auto" };

export default PredictedScore;
