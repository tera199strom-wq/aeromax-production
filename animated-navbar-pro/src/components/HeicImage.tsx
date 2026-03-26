import React, { useState, useEffect } from 'react';
import heic2any from 'heic2any';

interface HeicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const HeicImage: React.FC<HeicImageProps> = ({ src, ...props }) => {
  const [displaySrc, setDisplaySrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const isHeic = src.toLowerCase().endsWith('.heic');
    
    if (isHeic) {
      setIsLoading(true);
      setError(null);
      
      fetch(src)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`);
          return res.blob();
        })
        .then((blob) => 
          heic2any({
            blob,
            toType: 'image/jpeg',
            quality: 0.7
          })
        )
        .then((conversionResult) => {
          const result = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult;
          const url = URL.createObjectURL(result);
          setDisplaySrc(url);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('HEIC conversion error for', src, ':', err);
          // Fallback to original src, maybe the browser CAN handle it or it's not actually a HEIC
          setDisplaySrc(src);
          setIsLoading(false);
          // We don't set error here so it tries to render the original img tag
        });
    } else {
      setDisplaySrc(src);
      setIsLoading(false);
    }

    return () => {
      if (displaySrc.startsWith('blob:')) {
        URL.revokeObjectURL(displaySrc);
      }
    };
  }, [src]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-100 animate-pulse">
        <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 text-xs text-center p-2">
        {error}
      </div>
    );
  }

  return <img src={displaySrc} {...props} />;
};

export default HeicImage;
