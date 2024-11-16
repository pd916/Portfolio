"use client"
import Hero from "./components/Hero";
import ScrollingText from "./components/ScrollingText";
import Box1 from "./components/Box-1";
import BoxSecond from "./components/Box-2";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Cta from "./components/Cta";
import RecentWork from "./components/RecentWork";
import Tech from "./components/Tech";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";

export default function Home() {
 
  return (
    <section>
    <Hero/>
    <ScrollingText/>
    <Box1/>
    <BoxSecond/>
    <Experience/>
    <RecentWork/>
    <Tech/>
    <Approach/>
    <InfiniteMovingCardsDemo/>
    <Cta/>
    </section>
  );
}
