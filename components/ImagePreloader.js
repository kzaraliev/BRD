"use client";

import { useEffect } from "react";

// Списък с изображения, които трябва да се заредят предварително
const CRITICAL_IMAGES = [
  "/lawyer.webp", // Hero изображението
];

/**
 * Компонент за предварително зареждане на критични изображения
 * Подобрява LCP метриката, като зарежда важните изображения предварително
 */
export default function ImagePreloader() {
  useEffect(() => {
    const preloadImages = () => {
      CRITICAL_IMAGES.forEach((imageSrc) => {
        // Създаваме нов Image обект
        const img = new Image();

        // Важно: добавяме onload handler преди да зададем src
        img.onload = () => {
          console.log(`Image preloaded: ${imageSrc}`);
        };

        img.onerror = () => {
          console.error(`Failed to preload: ${imageSrc}`);
        };

        // Добавяме декодиране за оптимизирано рендериране
        if ("decode" in img) {
          img.src = imageSrc;
          img.decode().catch(() => {
            console.warn(`Image decode failed: ${imageSrc}`);
          });
        } else {
          // Fallback за браузъри без decode API
          img.src = imageSrc;
        }
      });
    };

    // Изпълняваме незабавно за критични изображения
    preloadImages();

    // Допълнително можем да заредим и второстепенни ресурси когато браузърът е в idle състояние
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        // Тук можем да заредим допълнителни не-критични изображения
      });
    }
  }, []);

  // Този компонент не рендерира нищо във видимата част на DOM
  return null;
}
