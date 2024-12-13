"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-click";
import { IconHeart } from "@tabler/icons-react";

export const PlayCardsGrid = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playNextSong = (currentIndex: number) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < cards.length) {
      handlePlayPause(cards[nextIndex]);
    } else {
      audioRef.current?.pause();
      setCurrentPlaying(null);
    }
  };

  const handlePlayPause = async (card: typeof cards[number]) => {
    try {
      if (currentPlaying === card.title) {
        audioRef.current?.pause();
        setCurrentPlaying(null);
        return;
      }

      if (!audioRef.current) {
        audioRef.current = new Audio(card.audioSrc);
      } else {
        audioRef.current.pause();
        audioRef.current.src = card.audioSrc;
      }

      // Set up the onended listener for the current song
      audioRef.current.onended = () => {
        const currentIndex = cards.findIndex(
          (item) => item.title === card.title
        );
        playNextSong(currentIndex);
      };

      await audioRef.current.play();
      setCurrentPlaying(card.title);
    } catch (error) {
      console.error("Audio play error:", error);
    }
  };

  // Preload all audio files
  useEffect(() => {
    cards.forEach((card) => {
      const audio = new Audio(card.audioSrc);
      audio.preload = "auto";
    });
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            {/* Modal Content */}
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-full md:h-14 md:w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <div className="flex justify-between items-center">

              <IconHeart
                size={25} // Adjusts the size (in px)
                color="gray" // Sets the color of the icon
                stroke={1.5} // Adjusts the stroke width
                className="flex-shrink-0 mx-2 md:mt-0 mt-4 hover:fill-red-700 hover:border-none"

              />
              <motion.button
                onClick={() => handlePlayPause(card)}
                className={`px-4 py-2 text-sm rounded-full font-bold ${currentPlaying === card.title
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 hover:bg-green-500 hover:text-white text-black"
                  } mt-4 md:mt-0`}
              >
                {currentPlaying === card.title ? "Pause" : "Play"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

const cards = [
  {
    description: "Raj kumar Rao, Pawan Singh",
    title: "Chumma",
    src: "/img/chumma.webp",
    ctaText: "Play",
    audioSrc: "/songs/Chumma.mp3",
  },
  {
    description: "Raj kumar Rao",
    title: "Aayi Nai",
    src: "/img/aayi-nai-stre.jpg",
    ctaText: "Play",
    audioSrc: "/songs/Aayi Nai Stree 2.mp3",
  },
  {
    description: "Allu Arjun",
    title: "Kissik",
    src: "/img/kissik.jpg",
    ctaText: "Play",
    audioSrc: "/songs/Kissik Pushpa 2.mp3",
  },
  {
    description: "Shahid Kapoor",
    title: "Gustak dil tere liye",
    src: "/img/Gustakh-Dil-Tere-Liye.jpg",
    ctaText: "Play",
    audioSrc: "/songs/Gustakh dil tere liye.mp3",
  },
  {
    description: "Allu Arjun and ",
    title: "Peelings",
    src: "/img/peelings.jpg",
    ctaText: "Play",
    audioSrc: "/songs/Peelings.mp3",
  },
];
