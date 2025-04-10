import React from "react";
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
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
          .container {
            display: flex;
            flex-direction: column;
            max-width: 8000px;
            min-height: 100vh;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 40px;
            border-bottom: 2px solid #f4f4f4;
            max-width: 4000px;
          }
          .logo {
            width: 40px;
            height: 40px;
          }
          h2 {
            color:rgb(20, 20, 20);
            font-size: 20px;
            font-weight: bold;
          }
          .content {
            padding: 40px;
          }
          .intro {
            margin-bottom: 20px;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            color: #141414;
          }
          .subtitle {
            color: #6b7280;
            font-size: 14px;
          }
          .matches {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            margin: 0 20px;
          }
          .match-card {
            width: 250px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 0 5px;
          }
          .match-image {
            width: 100%;
            height: 140px;
            background-size: cover;
            background-position: center;
            border-radius: 10px;
          }
          .match-details {
            text-align: left;
          }
          .match-title {
            font-size: 16px;
            font-weight: bold;
            color: #141414;
          }
          .match-score {
            font-size: 14px;
            color: #6b7280;
          }
          .news-title {
            font-size: 22px;
            font-weight: bold;
            margin-top: 30px;
          }
          .news {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .news-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 10px;
            background: #ffffff;
            border-radius: 8px;
          }
          .news-image {
            width: 60px;
            height: 60px;
            background-size: cover;
            background-position: center;
            border-radius: 10px;
          }
          .news-details {
            display: flex;
            flex-direction: column;
          }
          .news-description {
            font-size: 14px;
            color: #6b7280;
          }
          .image{
              background-image: url("https://www.livemint.com/lm-img/img/2024/10/10/1600x900/CRICKET-IND-BAN-TEST-9_1728578332395_1728578347250.jpg");
              background-size: cover;
              height: 800px; /* Ensure it has some height */
              width: 1530px;
              
          }
          .text-overlay {
              position: absolute; /* Positions the text relative to the container */
              top: 30%; /* Centers the text vertically */
              left: 17%; /* Centers the text horizontally */
              transform: translate(-50%, -50%); /* Fine-tunes centering */
              color: white; /* Or any desired text color */
              text-align: center; /* Centers the text within the container */
              /* Add any other desired styling for the text */
              font-size: 23px;
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              animation: fadeIn 0.5s ease-in-out forwards;
          }
p {

    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
}

span {
    display: inline-block;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    font-size: 23px;
}

@keyframes reveal {
    100% {
        opacity: 1;
    }
}

span {
    animation: reveal 0.5s ease-in-out forwards;
    margin-right: 6px;
}
        `}
      </style>

      <div className="container">
        <div className="image">
          <div className="text-overlay">
            <h3>One stop solution for all your cricket</h3>
            <h6>To unlock a personalized cricket experience<br></br>and never miss a moment of the action.</h6>
            <button
      style={{
        backgroundColor: "#E64833",
        color: "white",
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#E64833")}
      onClick={() => navigate("/login")}
    >
      Login
    </button>
          </div>
        </div>


        <br></br>

        
        <div className="content">
        <h2 className="news-title" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginRight: "10px" }}></span>Match Results<span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginLeft: "10px" }}></span></h2>
        <br></br>
          <div className="matches">
            {[
              {
                image: "https://cdn.usegalileo.ai/sdxl10/3f4cae4a-0269-4714-9de8-72bc494c3200.png",
                teams: "Australia vs. England",
                score: "Aus 300/3 (40 ov) Eng 200/6 (40 ov)",
              },
              {
                image: "https://cdn.usegalileo.ai/sdxl10/adab9386-3c29-4b8d-a382-3efefd224e8b.png",
                teams: "India vs. New Zealand",
                score: "Ind 250/4 (40 ov) NZ150/6 (40 ov)",
              },
              {
                image: "https://cdn.usegalileo.ai/sdxl10/43d57963-3170-4238-83e1-da89a9a621cf.png",
                teams: "South Africa vs. West Indies",
                score: "SA 275/5 (40 ov) WI 175/7 (40 ov)",
              },
              {
                image: "https://cdn.usegalileo.ai/sdxl10/3f4cae4a-0269-4714-9de8-72bc494c3200.png",
                teams: "Australia vs. England",
                score: "Aus 300/3 (40 ov) Eng 200/6 (40 ov)",
              },
              {
                image: "https://cdn.usegalileo.ai/sdxl10/adab9386-3c29-4b8d-a382-3efefd224e8b.png",
                teams: "India vs. New Zealand",
                score: "Ind 250/4 (40 ov) NZ 150/6 (40 ov)",
              },
            ].map((match, index) => (
              <div key={index} className="match-card">
                <div className="match-image" style={{ backgroundImage: `url(${match.image})` }}></div>
                <div className="match-details">
                  <p className="match-title">{match.teams}</p>
                  <p className="match-score">{match.score}</p>
                </div>
              </div>
            ))}
          </div>
            
          <br></br>
          <h2 className="news-title" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginRight: "10px" }}></span>Latest cricket news<span style={{ flexGrow: 1, height: "1px", backgroundColor: "black", marginLeft: "10px" }}></span></h2>

          <div className="news">
            {[
              {
                image: "https://cdn.usegalileo.ai/sdxl10/cdc9b6ad-b696-4030-9076-0c9e9a21e44c.png",
                title: "Joe Root hits century",
                description: "The England captain was in good form, scoring 100 runs from 80 balls.",
              },
              {
                image: "https://cdn.usegalileo.ai/sdxl10/7dac0f50-82e2-44b2-a913-6bd64ad0f093.png",
                title: "Mitchell Starc shines with ball",
                description: "Australia's star bowler took 5 wickets for 30 runs in a dominant display.",
              },
              {
                image: "https://cdn.usegalileo.ai/sdxl10/062727fd-1d37-459f-9fc9-9a57cc849449.png",
                title: "Rohit Sharma out for a golden duck",
                description: "The Indian opener was dismissed for a duck in the first over of the match.",
              },
            ].map((news, index) => (
              <div key={index} className="news-item">
                <div className="news-image" style={{ backgroundImage: `url(${news.image})` }}></div>
                <div className="news-details">
                  <p className="news-title">{news.title}</p>
                  <p className="news-description">{news.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
