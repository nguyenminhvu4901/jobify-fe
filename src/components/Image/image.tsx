import React from 'react';
import NextImage from 'next/image';

interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
    priority?: boolean;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string; // Dùng khi placeholder='blur'
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className, layout, priority, placeholder, blurDataURL }) => {
    return (
        <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            layout={layout}
            priority={priority}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            objectFit='cover'
        />
    );
};

export default Image;
