import React from "react";

const About = () => {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa", color: "#333" }}>
      
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ color: "#0073ff",fontSize: "40px" }}>🏏 All your cricket related thing at one place</h2>
        <p style={{ fontSize: "15px", maxWidth: "800px", margin: "0 auto" }}>
          Get real-time cricket updates, live scorecards, latest news, and AI-driven match predictions. Engage with cricket like never before!
        </p>
      </div>

      {/* Feature Sections */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        
        {/* Live Scorecard */}
        <div style={featureCardStyle}>
          <img src="https://media.istockphoto.com/id/472242898/photo/cricket-scoreboard.jpg?s=612x612&w=0&k=20&c=3tZ7ihzFuUjKO0Oek6bYg83Euo1Cc3MBQ5H3TOFk4XY=" alt="Live Scorecard" style={imageStyle} />
          <h2>📊 Live Scorecard</h2>
          <p>Stay updated with real-time scores, player stats, and match highlights as the game unfolds.</p>
        </div>

        {/* Cricket News */}
        <div style={featureCardStyle}>
          <img src="https://static.toiimg.com/thumb/imgsize-23456,msid-85996722,width-600,resizemode-4/85996722.jpg" alt="Cricket News" style={imageStyle} />
          <h2>📰 Latest Cricket News</h2>
          <p>Catch up on the latest cricket headlines, team updates, and match reports from around the world.</p>
        </div>

        {/* Live Commentary & Recording */}
        <div style={featureCardStyle}>
          <img src="https://blog.cricheroes.com/wp-content/uploads/2023/12/Cricket-Commentators.png" alt="Live Commentary" style={imageStyle} />
          <h2>🎙️ Live Commentary & Recording</h2>
          <p>Record and transcribe live cricket commentary in real-time with our advanced voice recognition technology.</p>
        </div>

        {/* AI Score Prediction */}
        <div style={featureCardStyle}>
          <img src="https://cricketaddictor.com/images/posts/2025/1000613592.jpg" alt="Score Prediction" style={imageStyle} />
          <h2>🤖 AI Match Prediction</h2>
          <p>Using AI models, predict the final score based on live match data and past performances.</p>
        </div>

      </div>

      {/* Footer Note */}
      <div style={{ textAlign: "center", marginTop: "40px", fontSize: "16px", color: "#666" }}>
        <p>🏆 Whether you're a cricket enthusiast or an analyst, our platform keeps you ahead in the game!</p>
      </div>

    </div>
  );
};

// Styles
const featureCardStyle = {
  width: "300px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  textAlign: "center",
  transition: "transform 0.3s",
};

const imageStyle = {
  width: "100%",
  height: "180px",
  borderRadius: "8px",
  objectFit: "cover",
  marginBottom: "15px",
};

export default About;
