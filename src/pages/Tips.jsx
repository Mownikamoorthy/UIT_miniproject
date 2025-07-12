import React from 'react';

function Tips() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Plant Care Tips</h2>
      <p style={styles.intro}>
        Indoor plants are more than just decorative additions to your home—they improve air quality, reduce stress, and boost mood. Caring for them doesn’t need to be difficult. With a few thoughtful steps and a little consistency, your plants can thrive in any indoor space. Below are some essential care tips, each designed to help both new and experienced plant parents nurture healthy greenery.
      </p>

      <div style={styles.tip}>
        <img src="https://th.bing.com/th/id/OIP.8T9dIjyS4Tt7rjDz0XUZ2gHaE8?w=240&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Light" style={styles.image} />
        <p><strong>1. Provide the Right Light:</strong> Plants need different levels of sunlight. Some thrive in bright, direct sunlight, while others prefer low-light corners. Be sure to research the light needs of each plant and place them accordingly near windows or under grow lights.</p>
      </div>

      <div style={styles.tip}>
        <img src="https://th.bing.com/th/id/OIP.o0CTKP73QKzPRDiPNF_iiQHaE8?w=240&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Watering" style={styles.image} />
        <p><strong>2. Water Properly:</strong> Overwatering is the most common reason houseplants die. Check the top inch of the soil before watering. If it's dry, then water thoroughly. Ensure your pots have drainage holes to avoid root rot.</p>
      </div>

      <div style={styles.tip}>
        <img src="https://th.bing.com/th/id/OIP.f_zahW0QoKP-nuI2EipGCQHaDZ?w=347&h=160&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Humidity" style={styles.image} />
        <p><strong>3. Maintain Humidity:</strong> Many indoor plants, especially tropical ones, appreciate extra humidity. You can increase humidity by misting the plants, using a humidifier, or placing a water tray nearby.</p>
      </div>

      <div style={styles.tip}>
        <img src="https://th.bing.com/th/id/OIP.dQJVPwKzG8Src13m9rwh9AHaFZ?w=277&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Leaf Cleaning" style={styles.image} />
        <p><strong>4. Clean the Leaves:</strong> Dust can build up on plant leaves, reducing their ability to photosynthesize. Use a soft, damp cloth to gently wipe the leaves every few weeks.</p>
      </div>

      <div style={styles.tip}>
        <img src="https://th.bing.com/th/id/OIP.dQJVPwKzG8Src13m9rwh9AHaFZ?w=277&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Pot Drainage" style={styles.image} />
        <p><strong>5. Use Proper Pots:</strong> Always use pots with drainage holes. This prevents water from sitting at the bottom and causing root rot. Clay pots also help absorb excess moisture.</p>
      </div>

      <div style={styles.tip}>
        <img src="https://th.bing.com/th/id/OIP.-YsA8Rx-n6-ncejbsGHxjwHaLG?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Rotate Plants" style={styles.image} />
        <p><strong>6. Rotate Weekly:</strong> To ensure even growth, rotate your plants every week. This allows all sides to receive equal sunlight and prevents leaning.</p>
      </div>

      <div style={styles.tip}>
        <img src="https://th.bing.com/th/id/OIP.RR5lMKUQ4xSlcKkKmsM5TwAAAA?w=143&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Fertilizer" style={styles.image} />
        <p><strong>7. Fertilize Monthly:</strong> Feed your plants with a liquid houseplant fertilizer every 4–6 weeks during spring and summer. Cut back in fall and winter when plants rest.</p>
      </div>

      <div style={styles.tip}>
        <img src="https://th.bing.com/th/id/OIP.NG7R0WjctpCQR023GK4eOgAAAA?w=181&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Repotting" style={styles.image} />
        <p><strong>8. Repot When Needed:</strong> If roots are growing out of the pot or the plant seems cramped, it’s time to repot. Use fresh soil and a slightly larger pot to give the roots space to grow.</p>
      </div>

      <p style={styles.outro}>
        With these simple steps, you can enjoy a thriving indoor garden that not only enhances your home’s atmosphere but also promotes your wellbeing. Happy planting!
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '25px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: 'auto',
    lineHeight: '1.7',
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '20px',
    color: '#2e7d32',
  },
  intro: {
    marginBottom: '20px',
    fontSize: '16px',
  },
  tip: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    gap: '15px',
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '10px',
    objectFit: 'cover',
    flexShrink: 0,
  },
  outro: {
    fontStyle: 'italic',
    marginTop: '30px',
  },
};

export default Tips;