
import React from 'react';

const styles = {
    container: {
      backgroundColor: '#e6f7ff',
      height: '100vh',
      display: 'flex', // Added flexbox for vertical centering
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally
    },
    title: {
      textAlign: 'center',
    },
  };

  
function Home () {
    return (
        <div className={styles.container}>
          <title>Primeiros Passos na Web</title>
          <h1 className={styles.title}>RCB - Um novo + velho mundo da WEB.</h1>
        </div>
      );
}

export default Home;
