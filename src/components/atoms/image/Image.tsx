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
          'flex flex-col items-center justify-center gap-1 bg-gray-100 text-gray-500 size-full',
          className
        )}
      >
        <span className="text-sm">تصویر یافت نشد</span>
        <code className="text-[10px] font-mono break-all max-w-48 opacity-70">
          {String(src)}
        </code>
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div
          className={cn(
            'absolute bg-gray-300 opacity-100 animate-pulse size-full'
          )}
        />
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
        onError={() => setHasError(true)}
        {...rest}
      />
    </>
  );
};
