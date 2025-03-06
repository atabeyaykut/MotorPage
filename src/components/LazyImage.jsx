import React, { useState } from 'react';
import { cn } from "../lib/utils";

const LazyImage = ({ src, alt, className, onError }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn(
        className,
        "transition-opacity duration-300",
        !isLoaded && "opacity-0"
      )}
      onLoad={() => setIsLoaded(true)}
      onError={() => {
        setIsLoaded(true);
        onError?.();
      }}
    />
  );
};

export default LazyImage;
