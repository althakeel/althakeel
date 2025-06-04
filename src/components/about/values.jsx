import React from 'react';

const Values = () => {
  const styles = {
    container: {
      padding: '40px 20px',
      backgroundColor: '#ffffff',
      textAlign: 'center',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#0f172a',
      marginBottom: '40px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: {
      width: '40px',
      height: '40px',
      objectFit: 'contain',
      marginBottom: '10px',
    },
    title: {
      fontWeight: '600',
      fontSize: '16px',
      color: '#0f172a',
      marginBottom: '5px',
    },
    description: {
      fontSize: '14px',
      color: '#64748b',
      textAlign: 'center',
    },
  };

  const valuesList = [
    { image: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504990/3_yjwzuz.svg', title: 'Passion', description: 'for purpose learning' },
    { image: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504991/4_whgike.svg', title: 'Commitment', description: 'to creating long term relationship' },
    { image: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504991/5_kmwh3r.svg', title: 'Curiosity', description: 'for productivity' },
    { image: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504992/6_v6a6i5.svg', title: 'Accountability', description: 'to drive performance' },
    { image: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504992/7_szztoc.svg', title: 'Proactiveness', description: 'in problem solving' },
    { image: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504993/8_u0zepp.svg', title: 'Empathetic', description: 'approach to leadership & community' },
    { image: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504990/2_cipirz.svg', title: 'Integrity', description: 'to infinity' },
    { image: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504990/1_tvifcq.svg', title: 'Diversity & Inclusion', description: 'to foster excellence' },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Values</h2>
      <div style={styles.grid}>
        {valuesList.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.icon} />
            <div style={styles.title}>{item.title}</div>
            <div style={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
