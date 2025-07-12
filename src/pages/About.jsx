import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Our Plant Care Guide</h2>
      <p style={styles.paragraph}>
        Welcome to our Plant Care Guide, your go-to destination for all things green and growing! We’re passionate about making plant care simple, fun, and rewarding for everyone—from beginners to seasoned plant lovers.
      </p>
      <p style={styles.paragraph}>
        Our mission is to help you build a healthier and greener living space by offering clear, easy-to-follow advice. Whether you're nurturing succulents on a sunny windowsill or maintaining a leafy indoor jungle, we’ve got the tips and resources you need.
      </p>
      <p style={styles.paragraph}>
        We believe plants aren’t just decoration—they’re living companions that boost well-being, purify air, and add life to your home. That’s why we provide curated plant care info, maintenance reminders, and styling inspiration. With our guide, you'll feel confident caring for your plants and watching them thrive.
      </p>
      <p style={styles.paragraph}>
        Thank you for visiting! Let’s grow together.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '25px',
    fontFamily: 'Verdana, sans-serif',
    maxWidth: '850px',
    margin: 'auto',
    color: '#2e2e2e',
    lineHeight: '1.7'
  },
  heading: {
    fontSize: '30px',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#2e7d32'
  },
  paragraph: {
    marginBottom: '15px',
    fontSize: '16px'
  }
};

export default About;