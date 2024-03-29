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
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >

      <Title />
      <ParallaxProvider>
        {/* <ProjectCard /> */}


        <ParallaxBanner
          className={styles.banner}
          layers={[
            {
              image: '/images/portfolio_text.svg',
              amount: 0.3,
              slowerScrollRate: false,
            }
          ]}
          style={{
            height: 'auto',
          }}
        >
          <div className={styles.bannerInner}></div>
        </ParallaxBanner>
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
