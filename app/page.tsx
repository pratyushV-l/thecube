import React from 'react';
import dynamic from 'next/dynamic';
//import styles from '../styles/Home.module.css';

const CubeCanvas = dynamic(() => import('./components/Cube'));

const Home = () => {
  return (
    <div >
      <h1>3D Rubik's Cube Simulator</h1>
      <CubeCanvas />
      <div >
        <button>Shuffle</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Home;