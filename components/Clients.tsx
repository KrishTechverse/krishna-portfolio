"use client";

import React from "react";
import Image from "next/image"; // If using Next.js, else use <img>
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow" // Ensure this is valid
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                src={company.img}
                alt={`Logo of ${company.name}`}
                className="md:w-10 w-5"
                width={40}
                height={40}
              />
              <Image
                src={company.nameImg}
                alt={`Company name: ${company.name}`}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                className="md:w-24 w-20"
                height={30}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
