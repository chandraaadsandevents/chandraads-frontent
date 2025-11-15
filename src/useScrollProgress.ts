import { useState, useEffect } from 'react';

export const useScrollProgress = (): number => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = (): void => {
      const currentProgress: number = window.scrollY;
      const scrollHeight: number = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        const progress: number = (currentProgress / scrollHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    return (): void => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return scrollProgress;
};