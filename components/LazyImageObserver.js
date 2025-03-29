"use client";

import { useEffect, useRef } from "react";

/**
 * Компонент, който следи кога LCP изображението влиза във viewport
 * и ще маркира, че е заредено успешно
 */
export default function LazyImageObserver() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Функция за докладване на LCP метрика
    const reportLCP = () => {
      if (window.performance && window.performance.mark) {
        window.performance.mark("lcp-detected");
      }
      if ("performance" in window) {
        console.log("LCP изображението е заредено успешно!");
      }
    };

    // Използваме Intersection Observer API за да проверим кога изображението е видимо
    const initIntersectionObserver = () => {
      // Търсим LCP изображението
      const targetImage = document.querySelector('[fetchpriority="high"]');

      if (targetImage && "IntersectionObserver" in window) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                reportLCP();
                // Изчистваме observer-а след като изображението е заредено
                if (observerRef.current) {
                  observerRef.current.disconnect();
                  observerRef.current = null;
                }
              }
            });
          },
          {
            root: null,
            threshold: 0.1, // 10% от изображението да бъде видимо
          }
        );

        observerRef.current.observe(targetImage);
      }
    };

    // Изчакваме DOM да се зареди изцяло
    if (document.readyState === "complete") {
      initIntersectionObserver();
    } else {
      window.addEventListener("load", initIntersectionObserver);
      return () => window.removeEventListener("load", initIntersectionObserver);
    }

    // Cleanup при unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  // Този компонент не рендерира нищо
  return null;
}
