"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";


export function AppleCardsCarouselDemo() {

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));



  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        Golden Melodies Collection.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent1 = () => (
  <>

    {/* <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    > */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Evergreen Bollywood Harmonies
        </span>{" "}
        {/* Keep a journal, quickly jot down a grocery list, and take amazing
        class notes. Want to convert those notes to text? No problem.
        Langotiya jeetu ka mara hua yaar is ready to capture every
        thought. */}
      </p>
      <Image
        src="/song (1).webp"
        alt="Bollywood Songs"
        height="500"
        width="500"
        className=" h-full w-full mx-auto object-contain p-8 md:p-14 rounded-3xl mb-4" />

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center">

        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"  >
          Play
        </button>
      </div>
    {/* </div> */}
  </>
);
const DummyContent2 = () => {
  return (
    <>

      {/* <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      > */}
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">

          Romantic Rhythms, Eternal Melodies.
                    </span>{" "}
          {/* Keep a journal, quickly jot down a grocery list, and take amazing
          class notes. Want to convert those notes to text? No problem.
          Langotiya jeetu ka mara hua yaar is ready to capture every
          thought. */}
        </p>
        <Image
          src="https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          height="500"
          width="500"
          className=" h-full w-full mx-auto object-contain p-8 md:p-14 rounded-3xl mb-4"
        />
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center">

          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"  >
            Play
          </button>
        </div>
      {/* </div> */}
    </>
  );
};
const DummyContent3 = () => {
  return (
    <>
{/* 
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      > */}
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Punjabi Vibes, Beats that Thrive.
          </span>{" "}
          {/* Keep a journal, quickly jot down a grocery list, and take amazing
          class notes. Want to convert those notes to text? No problem.
          Langotiya jeetu ka mara hua yaar is ready to capture every
          thought. */}
        </p>
        <Image
          src="https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fG11c2ljfGVufDB8fDB8fHww"
          alt="image"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain p-8 md:p-14 rounded-3xl mb-4"
        />
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center">

          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"  >
            Play
          </button>
        </div>
      {/* </div> */}
    </>
  );
};
const DummyContent4 = () => {
  return (
    <>

      {/* <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      > */}
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Latest chartbusters on repeat.
          </span>{" "}
          {/* Keep a journal, quickly jot down a grocery list, and take amazing
          class notes. Want to convert those notes to text? No problem.
          Langotiya jeetu ka mara hua yaar is ready to capture every
          thought. */}
        </p>
        <Image
          src="https://images.unsplash.com/photo-1586095087956-bc66fe634955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="image"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain p-8 md:p-14 rounded-3xl mb-4"
        />
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center">

          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"  >
            Play
          </button>
        </div>
      {/* </div> */}
    </>
  );
};
const DummyContent5 = () => {
  return (
    <>

      {/* <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      > */}
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Boost your energy with high-tempo beats.
          </span>{" "}
          {/* Keep a journal, quickly jot down a grocery list, and take amazing
          class notes. Want to convert those notes to text? No problem.
          Langotiya jeetu ka mara hua yaar is ready to capture every
          thought. */}
        </p>
        <Image
          src="https://images.unsplash.com/photo-1647647460670-e731134eb1d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNvbmdzfGVufDB8fDB8fHww"
          alt="image"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain p-8 md:p-14 rounded-3xl mb-4"
        />
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center">

          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"  >
            Play
          </button>
        </div>
      {/* </div> */}
    </>
  );
};

const data = [
  {
    category: "Bollywood Songs",
    title: "Bollywood Beats, Timeless Tunes.",
    src: "https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fG11c2ljfGVufDB8fDB8fHww",
    content: <DummyContent1 />,
  },
  {
    category: "Romantic Songs",
    title: "Romantic Rhythms, Eternal Melodies.",
    src: "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent2 />,
  },
  {
    category: "Punjabi songs",
    title: "Punjabi Vibes, Beats that Thrive.",
    src: "https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fG11c2ljfGVufDB8fDB8fHww",
    content: <DummyContent3 />,
  },

  {
    category: "Trending Hits",
    title: "Latest chartbusters on repeat.",
    src: "https://images.unsplash.com/photo-1586095087956-bc66fe634955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    content: <DummyContent4 />,
  },
  {
    category: "Workout Power",
    title: "Boost your energy with high-tempo beats.",
    src: "https://images.unsplash.com/photo-1647647460670-e731134eb1d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNvbmdzfGVufDB8fDB8fHww",
    content: <DummyContent5 />,
  },
];
