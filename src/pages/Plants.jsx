import React, { useState } from 'react';

const plants = [
  {
    name: 'Aloe Vera',
    light: 'Indirect',
    water: 'Once a week',
    image: 'https://th.bing.com/th/id/OIP.wTPNqAa2BrIH7B-7BdRLoQHaHa?w=152&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Snake Plant',
    light: 'Low to Bright',
    water: 'Every 2 weeks',
    image: 'https://th.bing.com/th/id/OIP.KZ634hTvuiBa-47C5Qhy-gHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7https://www.thespruce.com/thmb/IxHLCzA7l7CyqDCM1qKEnxqZsd8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plant-indoors-1902770-hero-66b2e245e8804f39a51268e6e336b40f.jpg'
  },
  {
    name: 'Peace Lily',
    light: 'Low to Bright',
    water: 'Keep soil moist',
    image: 'https://th.bing.com/th/id/OIP.TB99NIg00XRq2U5PWVf52AHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  },
  {
    name: 'Monstera',
    light: 'Bright Indirect',
    water: '1–2 times a week',
    image: 'https://th.bing.com/th?q=Monstera+Cheese+Plant&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'
  },
  {
    name: 'Spider Plant',
    light: 'Indirect',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.cLfvBhyL6aTc_sZJByklIwHaHa?w=148&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'ZZ Plant',
    light: 'Low',
    water: 'Every 2–3 weeks',
    image: 'https://th.bing.com/th/id/OIP.JFaPCWSVoXnDmNzLQkL59AHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5'
  },
  {
    name: 'Fiddle Leaf Fig',
    light: 'Bright Indirect',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.EUrG0Bz0nvkQlDQlbHTjWgHaFS?w=202&h=145&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  },
  {
    name: 'Rubber Plant',
    light: 'Bright Indirect',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.XeLO_0arEwb-5w2KoGe-GgHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Pothos',
    light: 'Low to Bright',
    water: '1–2 times a week',
    image: 'https://th.bing.com/th/id/OIP.psZG8vsO82s1Jtc5XLEmsQHaE_?w=275&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  },
  {
    name: 'Philodendron',
    light: 'Low to Medium',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.qA8q4S3EKuPT1LQyzv_fHQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Jade Plant',
    light: 'Direct Sunlight',
    water: 'Every 2–3 weeks',
    image: 'https://th.bing.com/th/id/OIP.3N3nFuAU3lKqubMVYe8bbwHaFj?w=228&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Dracaena',
    light: 'Filtered Light',
    water: 'Every 10 days',
    image: 'https://th.bing.com/th/id/OIP.-Slkh038y3CFjd442ay1awHaJ4?w=130&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Boston Fern',
    light: 'Indirect',
    water: 'Keep moist',
    image: 'https://th.bing.com/th/id/OIP.0qtgqveJFB-qMQXYc-kgcgHaIj?w=148&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Chinese Evergreen',
    light: 'Low',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.fp2sFIJZJviAEwok3gqMwgHaE8?rs=1&pid=ImgDetMain'
  },
  {
    name: 'Croton',
    light: 'Bright',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.tq0qc1jKyE29vY9Rj_n0UgHaHF?w=198&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Calathea',
    light: 'Low to Medium',
    water: 'Keep moist',
    image: 'https://th.bing.com/th/id/OIP.atZQlDVVMuVTkjBBKly35QHaJQ?w=143&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Dieffenbachia',
    light: 'Indirect',
    water: 'Weekly',
    image: 'https://ts2.mm.bing.net/th?id=OIP.4mJ4Fst5IzTjGd6B8ek-jAHaJ7&pid=15.1'
  },
  {
    name: 'Bird’s Nest Fern',
    light: 'Indirect',
    water: 'Keep moist',
    image: 'https://ts3.mm.bing.net/th?id=OIP.qRXL-xqc3kym_RAhH6MY7wHaHa&pid=15.1'
  },
  {
    name: 'Areca Palm',
    light: 'Bright Indirect',
    water: 'Weekly',
    image: 'https://ts1.mm.bing.net/th?id=OIP.dlxSeVi-CYG7MYKtqB-unAHaJ4&pid=15.1'
  },
  {
    name: 'Majesty Palm',
    light: 'Bright',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.07YBlU36X6yOtFKNFm8hyQHaHt?w=202&h=211&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Anthurium',
    light: 'Indirect',
    water: 'Weekly',
    image: 'https://ts2.mm.bing.net/th?id=OIP.QNNnqe8sNQNtMqAspc-UiQHaFW&pid=15.1'
  },
  {
    name: 'Bamboo Palm',
    light: 'Low to Bright',
    water: 'Keep soil moist',
    image: 'https://th.bing.com/th/id/OIP.25w-Stef_gHWz4YRhjA7KwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Peperomia',
    light: 'Medium to Bright',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.0i7yZJlS8fUJUNNJ08x5VgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Aglaonema',
    light: 'Low',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.-CCT__1Qj06ok34K4jocmQHaH7?w=198&h=212&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Oxalis',
    light: 'Indirect',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.S2TrpVJaVeo1cDya6N0ivAHaJ4?w=153&h=205&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Cast Iron Plant',
    light: 'Low to Medium',
    water: 'Every 2 weeks',
    image: 'https://ts1.mm.bing.net/th?id=OIP.Phb5jTKktdfGvjaSaF2D1gHaHa&pid=15.1'
  },
  {
    name: 'Lucky Bamboo',
    light: 'Indirect',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.XrIurpG7wnBs3jqTcBb2MQHaHa?w=181&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Kalanchoe',
    light: 'Direct Sunlight',
    water: 'Every 2–3 weeks',
    image: 'https://th.bing.com/th/id/OIP.ONTfDCfMnLIdfTmZ4rW_ZQHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Hoya',
    light: 'Indirect',
    water: 'Every 1–2 weeks',
    image: 'https://ts2.mm.bing.net/th?id=OIP.jq7c8rKzbe94iUQp_ubczwHaJ4&pid=15.1'
  },
  {
    name: 'Coleus',
    light: 'Bright Indirect',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.0NkW5JUmBUV3YBgzp0qCMAHaJQ?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7 '
  },
  {
    name: 'Pilea',
    light: 'Indirect',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.gC2rY04oUV6ShtKObXEk9wHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Bromeliad',
    light: 'Indirect',
    water: 'Every 2 weeks',
    image: 'https://th.bing.com/th/id/OIP.kcI0fHRoOqi3RHbil4vMRwHaE8?pid=ImgDet&w=178&h=118&c=7&dpr=1.5'
  },
  {
    name: 'Cactus',
    light: 'Direct Sunlight',
    water: 'Every 2 weeks',
    image: 'https://th.bing.com/th/id/OIP.2dgDPDxImiHEZB1y43RWQwHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5'
  },
  {
    name: 'Ferns (Boston Fern, Maidenhair)',
    light: 'Indirect',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.ZGzHyv0xUpIAZCxQaq_EBgAAAA?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    name: 'Aubrieta',
    light: 'Bright Indirect',
    water: 'Weekly',
    image: 'https://th.bing.com/th/id/OIP.OaEbwDGwpRuCSiRaa5ol9wHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5'
  }
];


function Plants() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Indoor Plant Guide</h2>
      <input
        type="text"
        placeholder="Search plants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />
      <div style={styles.grid}>
        {filteredPlants.map((plant) => (
          <div key={plant.name} style={styles.card}>
            <img src={plant.image} alt={plant.name} style={styles.image} />
            <h3>{plant.name}</h3>
            <p><strong>Light:</strong> {plant.light}</p>
            <p><strong>Water:</strong> {plant.water}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '25px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  searchBar: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  },
  card: {
    width: '230px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px'
  }
};

export default Plants;
