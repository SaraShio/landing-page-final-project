import React from 'react';
import Image from 'next/image';
import { Title } from '../components/Title';
import { Moneyment } from '../components/Moneyment';
import { WeddingBrochure } from '../components/WeddingBrochure';
import { MotionGraphics } from '../components/MotionGraphics';
import { LandingPage } from '../components/LandingPage';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${styles.padding}`}>
      <Title />

      {/* Moving SVG Banner */}
      <div className={styles.movingBanner}></div>

      {/* Project Container */}
      <div className={styles.projectContainer}>
        <Moneyment imageSrc="/images/mm.png" />
        <WeddingBrochure imageSrc="/images/wb.png" />
        <MotionGraphics imageSrc="/images/mg.png" />
        <LandingPage imageSrc="/images/lp.png" />
      </div>
    </main>
  );
}
