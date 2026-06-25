import NextImage from 'next/image';
import { cn } from '@/utils/cn';
import { useState } from 'react';

type ImageProps = React.ComponentProps<typeof NextImage>;

export const Image: React.FC<ImageProps> = ({
  src,
  alt = '',
  className,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-1 bg-gray-100 text-gray-500',
          className
        )}
      />
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <NextImage
        src={src}
        alt={alt}
        fill
        onLoadingComplete={() => setLoaded(true)}
        className={cn(
          'object-cover object-center transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0'
        )}
        onError={() => {
          setHasError(true);
          console.error('Next/Image failed to load:', {
            src,
            alt,
            page:
              typeof window !== 'undefined' ? window.location.pathname : 'SSR',
            timestamp: new Date().toISOString(),
          });
        }}
        {...rest}
      />
    </div>
  );
};
