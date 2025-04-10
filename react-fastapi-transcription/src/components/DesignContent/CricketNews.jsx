import React from "react";

const newsData = [
  {
    title: "Virat Kohli Scores Century Against Australia!",
    description: "Virat Kohli showcased his class with a stunning century, leading India to victory against Australia in the 3rd ODI.",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201901/kohli150119_0.jpeg?VersionId=2c02gyFGh_UVGzim5Fkkkb.SMgANdzMj",
    url: "#"
  },
  {
    title: "IPL 2025 Auction: Top Players Sold",
    description: "The IPL 2025 auction saw some massive deals, with top players securing multi-million dollar contracts.",
    image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/351400/351415.6.jpg",
    url: "#"
  },
  {
    title: "England Clinches Ashes Series in a Thriller!",
    description: "England's test team displayed brilliant resilience to secure the Ashes trophy in a nail-biting final.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKV-GJ881QUD8mPoXwngJTMQiT7SNzUIxL7A&s",
    url: "#"
  },
  {
    title: "T20 World Cup Schedule Announced",
    description: "The ICC has officially released the schedule for the T20 World Cup 2025. Exciting matches ahead!",
    image: "https://c.ndtvimg.com/2024-06/edpho2fo_chris-gayle-t20-world-cup_625x300_03_June_24.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605",
    url: "#"
  },
  {
    title: "MS Dhoni Returns to CSK Training Camp",
    description: "CSK fans are excited as their captain, MS Dhoni, returns to the practice session ahead of IPL 2025.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-7DUenNLB7-Ma9kznOIp6tzpKsIRl2eHEg&s",
    url: "#"
  },
  {
    title: "Hardik Pandya's Cheeky Send-Off To KKR Batter ",
    description: "Hardik Pandya gave a cheeky send-off to Angkrish Raghuvanshi during the IPL 2025 encounter ",
    image: "https://c.ndtvimg.com/2025-03/shg81j3_cas_625x300_31_March_25.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    url: "#"
  }
];

const CricketNews = () => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#f4f4f4"
    },
    heading: {
      fontSize: "28px",
      color: "#0275d8",
      marginBottom: "20px"
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px"
    },
    card: {
      width: "300px",
      background: "white",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
      overflow: "hidden",
      transition: "transform 0.3s",
      textAlign: "left"
    },
    cardHover: {
      transform: "scale(1.05)"
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover"
    },
    title: {
      fontSize: "18px",
      color: "#333",
      padding: "10px"
    },
    description: {
      fontSize: "14px",
      color: "#555",
      padding: "0 10px",
      minHeight: "60px"
    },
    link: {
      display: "block",
      textAlign: "center",
      padding: "10px",
      background: "#0275d8",
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px"
    },
    linkHover: {
      background: "#025aa5"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🏏 Latest Cricket News</h2>
      <div style={styles.grid}>
        {newsData.map((article, index) => (
          <div key={index} style={styles.card} className="news-card">
            <img src={article.image} alt="News" style={styles.image} />
            <h3 style={styles.title}>{article.title}</h3>
            <p style={styles.description}>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CricketNews;
