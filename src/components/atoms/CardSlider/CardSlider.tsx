import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import {
  NavigationButton,
  SlideItem,
  SliderContainer,
  SlideTrack,
} from './CardSlider.styles';

type CardSliderProps = {
  children: React.ReactNode;
  slidesToShow: number;
  slidesToScroll: number;
  autoPlay: boolean;
  autoPlaySpeed: number;
  showArrows: boolean;
  showDots: boolean;
  className?: string;
  cardWidth: number;
  gap: number;
};

const CardSlider = ({
  children,
  slidesToShow,
  slidesToScroll,
  autoPlay,
  autoPlaySpeed,
  showArrows,
  showDots,
  className,
  cardWidth,
  gap,
}: CardSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);

  const totalSlides = React.Children.count(children);
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  useEffect(() => {
    const slideWidth = cardWidth + gap;
    setTranslateX(-currentIndex * slideWidth * slidesToScroll);
  }, [currentIndex, cardWidth, gap, slidesToScroll]);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + slidesToScroll));
      }, autoPlaySpeed);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlaySpeed, maxIndex, slidesToScroll]);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - slidesToScroll));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + slidesToScroll));
  };

  return (
    <SliderContainer ref={sliderRef} className={`relative ${className}`}>
      <div className="overflow-hidden">
        <SlideTrack translateX={translateX}>
          {React.Children.map(children, (child, index) => (
            <SlideItem
              key={index}
              style={{ width: cardWidth }}
              className="flex-shrink-0"
            >
              {child}
            </SlideItem>
          ))}
        </SlideTrack>
      </div>

      {showArrows && (
        <>
          <NavigationButton
            direction="prev"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft />
          </NavigationButton>

          <NavigationButton
            direction="next"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight />
          </NavigationButton>
        </>
      )}

      {showDots && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(totalSlides / slidesToShow) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * slidesToScroll)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / slidesToScroll) === index
                    ? 'bg-blue-500'
                    : 'bg-gray-300'
                }`}
              />
            )
          )}
        </div>
      )}
    </SliderContainer>
  );
};

export default CardSlider;
