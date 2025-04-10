// import React from "react";

// const MatchData = ({ matchData }) => (
//     matchData ? (
//         <div style={boxStyle}>
//             <h2>Match Data</h2>
//             <p><strong>Total Score:</strong> {matchData.total_score}</p>
//             <p><strong>Wickets:</strong> {matchData.wickets}</p>

//                                 {/* Batsman Table */}
//                                 {matchData.mybatsman.length > 0 && (
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
//         </div>
//     ) : null
// );

// const boxStyle = { background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", width: "400px", margin: "10px 0" };
// const tableStyle = { width: "100%", borderCollapse: "collapse" };

// export default MatchData;



































import React from "react";

const MatchData = ({ matchData }) => (
    matchData ? (
        <div style={boxStyle}>
            {/* <h2 style={{color:"#0073ff"}}>Match Data</h2> */}
            <h2 className="news-title" style={{ display: "flex", alignItems: "center", justifyContent: "center", color:"#0073ff" }}><span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginRight: "10px" }}></span>Match Data<span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginLeft: "10px" }}></span></h2>
            <p><strong>Total Score:</strong> {matchData.total_score}</p>
            <p><strong>Wickets:</strong> {matchData.wickets}</p>

                                {/* Batsman Table */}
                                {matchData.mybatsman.length > 0 && (
                        <>
                            <h3>Batsmen</h3>
                            <table style={tableStyle}>
                                <thead>
                                    <tr>
                                        <th>Name</th><th>Status</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>SR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {matchData.mybatsman.map((batsman, index) => (
                                        <tr key={index}>
                                            <td style={{ textAlign: "center" }}>{batsman.Batsman}</td><td style={{ textAlign: "center" }}>{batsman.status}</td><td style={{ textAlign: "center" }}>{batsman.R}</td><td style={{ textAlign: "center" }}>{batsman.B}</td><td style={{ textAlign: "center" }}>{batsman["4s"]}</td><td style={{ textAlign: "center" }}>{batsman["6s"]}</td><td style={{ textAlign: "center" }}>{batsman.SR}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )}
                    <br></br>
                    {/* Bowler Table */}
                    {matchData.myballer.length > 0 && (
                        <>
                            <h3>Bowlers</h3>
                            <table style={tableStyle}>
                                <thead>
                                    <tr>
                                        <th>Name</th><th>Overs</th><th>Runs</th><th>Wickets</th><th>EC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {matchData.myballer.map((bowler, index) => (
                                        <tr key={index}>
                                            <td style={{ textAlign: "center" }}>{bowler.Baller}</td><td style={{ textAlign: "center" }}>{bowler.O}</td><td style={{ textAlign: "center" }}>{bowler.R}</td><td style={{ textAlign: "center" }}>{bowler.W}</td><td style={{ textAlign: "center" }}>{bowler.EC}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )}
        </div>
    ) : null
);

const boxStyle = { background: "#fff", padding: "20px", borderRadius: "10px", width: "800px", margin: "10px 0" };
const tableStyle = { width: "100%", borderCollapse: "collapse" };

export default MatchData;

