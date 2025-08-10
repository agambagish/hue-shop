"use client";

import { useState } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface Props {
  images: string[];
  productName: string;
}

export function ProductImageSlider({ images, productName }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      <div className="group relative aspect-square overflow-hidden rounded-2xl bg-muted">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={`${productName} - Image ${currentImage + 1}`}
          fill
          className={cn(
            "object-cover transition-transform duration-300",
            isZoomed ? "scale-150" : "group-hover:scale-105",
          )}
          priority
        />
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="-translate-y-1/2 absolute top-1/2 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="-translate-y-1/2 absolute top-1/2 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Expand className="h-4 w-4" />
        </Button>
        <div className="absolute bottom-4 left-4 rounded-full bg-background/80 px-3 py-1 font-medium text-sm backdrop-blur-sm">
          {currentImage + 1} / {images.length}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index.toString()}
            type="button"
            onClick={() => setCurrentImage(index)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-lg bg-muted transition-all duration-200",
              currentImage === index
                ? "ring-2 ring-primary ring-offset-2"
                : "hover:opacity-80",
            )}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${productName} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
