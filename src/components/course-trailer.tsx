"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

type Media = {
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url?: string;
};

type CourseTrailerCarouselProps = {
  mediaList: Media[];
};

export function CourseTrailerCarousel({ mediaList }: CourseTrailerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = mediaList.length;

  // Handlers for next/prev buttons
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + length) % length);

  // Optional: Swipe support (basic)
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!mediaList || mediaList.length === 0) {
    return <p className="p-4 text-center">কোনো মিডিয়া পাওয়া যায়নি</p>;
  }

  const currentMedia = mediaList[currentIndex];

  return (
    <Card className="mb-6 max-w-xl mx-auto">
      <CardContent className="p-0 relative" 
        onTouchStart={onTouchStart} 
        onTouchMove={onTouchMove} 
        onTouchEnd={onTouchEnd}
      >
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
          {currentMedia.resource_type === "video" ? (
            <a
              href={`https://www.youtube.com/watch?v=${currentMedia.resource_value}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-full"
            >
              <Image
                src={
                  currentMedia.thumbnail_url ||
                  `https://img.youtube.com/vi/${currentMedia.resource_value}/hqdefault.jpg`
                }
                alt={`Video thumbnail ${currentMedia.resource_value}`}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-white/20 hover:bg-white/30 rounded-full p-6">
                  <Play className="w-10 h-10 text-white" />
                </Button>
              </div>
            </a>
          ) : (
            <Image
              src={currentMedia.resource_value}
              alt={currentMedia.name || "Course image"}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          )}
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-3">
          {mediaList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-blue-600" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
