"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="h-[22rem] md:h-[20rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-xl text-white font-[head] text-center my-8">Words from Our Happy <span className="text-[#D6A77A]">Clients</span></h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>)
  );
}

const testimonials = [
  {
    quote:
      "Working with this developer was an absolute game-changer. It was the best of times—our website came to life with incredible features and speed",
  },
  {
    quote:
      "When we first started the project, we faced many challenges. But working with this developer was like finding the solution to our every problem. Their problem-solving skills and innovative approach turned what seemed like insurmountable obstacles into simple solutions",
  },
  {
    quote: "The experience of working with this developer was almost surreal. What started as a dream of a sleek, user-friendly platform became a fully realized product, thanks to their attention to detail and technical expertise",
    name: "Edgar Allan Poe",
  },
  {
    quote:
      "It’s a truth universally acknowledged—if you want your business to thrive online, you need a developer you can trust. And trust me, this developer is the one. From concept to launch, they delivered exactly what we needed.",
    name: "Jane Austen",
  },
  {
    quote:
      "We came to this developer with a clear vision but limited resources. Their creativity and resourcefulness helped us create a stunning product that perfectly aligned with our goals. They worked within our budget and timelines, and the end result exceeded all expectations",
    name: "Herman Melville",
  },
];
