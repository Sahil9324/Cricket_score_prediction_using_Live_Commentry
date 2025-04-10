// import React from "react";

// const teams = ['Australia', 'India', 'Bangladesh', 'New Zealand', 'South Africa', 'England', 'West Indies', 
//     'Afghanistan', 'Pakistan', 'Sri Lanka'];
// const cities = ['Colombo', 'Mirpur', 'Johannesburg', 'Dubai', 'Auckland', 'Cape Town', 'London', 'Pallekele', 
//     'Barbados', 'Sydney', 'Melbourne', 'Durban', 'St Lucia', 'Wellington', 'Lauderhill', 'Hamilton', 
//     'Centurion', 'Manchester', 'Abu Dhabi', 'Mumbai', 'Nottingham', 'Southampton', 'Mount Maunganui', 
//     'Chittagong', 'Kolkata', 'Lahore', 'Delhi', 'Nagpur', 'Chandigarh', 'Adelaide', 'Bangalore', 
//     'St Kitts', 'Cardiff', 'Christchurch', 'Trinidad'];

// const MatchDetails = ({ battingTeam, setBattingTeam, bowlingTeam, setBowlingTeam, city, setCity }) => (
//     <div style={boxStyle}>
//         <h2>Match Details</h2>
//         <label>Batting Team:</label>
//         <select style={inputStyle} value={battingTeam} onChange={(e) => setBattingTeam(e.target.value)}>
//             {teams.map(team => <option key={team} value={team}>{team}</option>)}
//         </select>

//         <label>Bowling Team:</label>
//         <select style={inputStyle} value={bowlingTeam} onChange={(e) => setBowlingTeam(e.target.value)}>
//             {teams.map(team => <option key={team} value={team}>{team}</option>)}
//         </select>

//         <label>City:</label>
//         <select style={inputStyle} value={city} onChange={(e) => setCity(e.target.value)}>
//             {cities.map(c => <option key={c} value={c}>{c}</option>)}
//         </select>
//     </div>
// );

// const boxStyle = { background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", width: "400px", margin: "10px 0" };
// const inputStyle = { width: "100%", padding: "8px", margin: "5px 0" };

// export default MatchDetails;



















import React from "react";

const teams = ['Australia', 'India', 'Bangladesh', 'New Zealand', 'South Africa', 'England', 'West Indies', 
    'Afghanistan', 'Pakistan', 'Sri Lanka'];
const cities = ['Colombo', 'Mirpur', 'Johannesburg', 'Dubai', 'Auckland', 'Cape Town', 'London', 'Pallekele', 
    'Barbados', 'Sydney', 'Melbourne', 'Durban', 'St Lucia', 'Wellington', 'Lauderhill', 'Hamilton', 
    'Centurion', 'Manchester', 'Abu Dhabi', 'Mumbai', 'Nottingham', 'Southampton', 'Mount Maunganui', 
    'Chittagong', 'Kolkata', 'Lahore', 'Delhi', 'Nagpur', 'Chandigarh', 'Adelaide', 'Bangalore', 
    'St Kitts', 'Cardiff', 'Christchurch', 'Trinidad'];

const MatchDetails = ({ battingTeam, setBattingTeam, bowlingTeam, setBowlingTeam, city, setCity }) => (
    <div style={boxStyle}>
        {/* <h2 style={{color:"#0073ff"}}>Match Details</h2> */}
        <h2 className="news-title" style={{ display: "flex", alignItems: "center", justifyContent: "center", color:"#0073ff" }}><span style={{ flexGrow: 1, height: "0.5px", backgroundColor: "black", marginRight: "10px" }}></span>Match Details<span style={{ flexGrow: 1, height: "0.5px", backgroundColor: "black", marginLeft: "10px" }}></span></h2>
        <label style={label}>Batting Team: </label>
        <select style={inputStyle} value={battingTeam} onChange={(e) => setBattingTeam(e.target.value)}>
            {teams.map(team => <option key={team} value={team}>{team}</option>)}
        </select>

        <label style={label} >Bowling Team: </label>
        <select style={inputStyle} value={bowlingTeam} onChange={(e) => setBowlingTeam(e.target.value)}>
            {teams.map(team => <option key={team} value={team}>{team}</option>)}
        </select>

        <label style={label}>City: </label>
        <select style={inputStyle} value={city} onChange={(e) => setCity(e.target.value)}>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
    </div>
);

const boxStyle = { background: "#fff", padding: "20px", borderRadius: "10px",  width: "800px", margin: "10px 0" };
const inputStyle = {   
    padding: "0.5em",       // Add some padding inside the input field
    border: "1px solid #ccc", // Add a subtle border
    borderRadius: "6px",    // Round the corners
    marginBottom: "1em"     // Add space below the input
    };
    const label = {
        // display: "flex",       // Ensure labels are on their own line
        marginBottom: "0.5em",  // Add some space between label and input
        paddingLeft: "30px"
    };
      
export default MatchDetails;




















