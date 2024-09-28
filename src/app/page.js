'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

import { useEffect, useState } from 'react';
import { getAllIceCream } from '../api/iceCream';
import IceCreamCard from '../components/IceCreamCard';

function Home() {
  const [iceCream, setIceCream] = useState([]);

  const iceCreamData = async () => {
    const data = await getAllIceCream();
    setIceCream(data);
  };

  useEffect(() => {
    iceCreamData();
  }, []);

  return (
    <div className="iceBox d-flex flex-wrap" style={{ marginTop: '100px' }}>
      {iceCream.map((i) => (
        <IceCreamCard key={i.firebaseKey} iceCreamObj={i} onUpdate={iceCreamData} />
      ))}
    </div>
  );
}

export default Home;
