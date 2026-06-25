import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { motion, AnimatePresence } from "framer-motion";

export function TransformationsCarousel({ transformations }: { transformations: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (transformations.length <= 1) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [transformations.length]);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  if (!transformations || transformations.length === 0) return null;

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0"
          >
            <div className="animated-gradient-border p-1 rounded-lg shadow-2xl h-full w-full">
              <BeforeAfterSlider
                beforeImage={transformations[currentIndex].beforeImage}
                afterImage={transformations[currentIndex].afterImage}
                beforeLabel={transformations[currentIndex].beforeLabel || "Before"}
                afterLabel={transformations[currentIndex].afterLabel || "After"}
                className="w-full h-full"
              />
            </div>
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none z-10">
               <h3 className="text-white text-xl md:text-3xl font-display tracking-wider drop-shadow-md">
                 {transformations[currentIndex].title}
               </h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {transformations.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur flex items-center justify-center rounded-full shadow-lg text-emerald-deep transition-all z-10"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur flex items-center justify-center rounded-full shadow-lg text-emerald-deep transition-all z-10"
          >
            <ChevronRight className="size-6" />
          </button>
        </>
      )}
    </div>
  );
}
