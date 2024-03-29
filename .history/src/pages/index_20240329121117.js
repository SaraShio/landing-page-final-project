import Image from "next/image";
import styles from '../styles/Home.module.css';
import React from "react";
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { ProjectCard } from "../components/ProjectCard";
import { Moneyment } from "../components/Moneyment";
import { WeddingBrochure } from "../components/WeddingBrochure";
import { MotionGraphics } from "../components/MotionGraphics";
import { LandingPage } from "../components/LandingPage";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>

      <Title />
      <ParallaxProvider>
        <ParallaxBanner
          className={styles.banner}
          layers={[
            {
              image: '/path/to/your/banner/image.jpg',
              amount: 0.3, // Adjust the amount of parallax effect
              slowerScrollRate: false, // Whether the banner should scroll slower than the page
            }
          ]}
          style={{
            height: 'auto', // Set the height of the banner
          }}
        >
          <div className={styles.bannerInner}>PORTFOLIO</div>
        </ParallaxBanner>

        {/* Rest of your content */}
        
        <div className={styles.project_container}>
          <div>
            <Moneyment imageSrc="/images/mm.png" />
            <WeddingBrochure imageSrc="/images/wb.png" />
          </div>
          <div>
            <MotionGraphics imageSrc="/images/mg.png" />
            <LandingPage imageSrc="/images/lp.png" />
          </div>
        </div>
      </ParallaxProvider>
    </main>
  );
}
