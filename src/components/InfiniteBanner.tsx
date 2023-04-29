// react
import { useEffect } from 'react';

// components
import { VerticalTicker, HorizontalTicker } from 'react-infinite-ticker';

// animations
import { motion, useAnimation } from 'framer-motion';

// interfaces
interface InfiniteBannerProps {
    images: { src: string; label?: string; link?: string }[];
    speed?: number;
    reverse?: boolean;
}

const InfiniteBanner: React.FC<InfiniteBannerProps> = ({
    images,
    speed = 1,
    reverse = false,
}) => {
    const containerClass =
        'w-64 h-24 mx-2 flex items-center justify-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-5 transition-all duration-500';

    const cardVariants = {
        offscreen: {
            opacity: 0,
			y: 20,
        },
        onscreen: {
            opacity: 1,
			y: 0,
        },
    };

    return (
        <motion.div
            className='ticker my-8'
            initial='offscreen'
            whileInView='onscreen'
            variants={cardVariants}
            viewport={{ once: true, amount: 0.8 }}
        >
            <HorizontalTicker duration={20000 / speed} reverse={reverse}>
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className={containerClass}
                        onClick={() => {
                            if (image.link) {
                                window.open(image.link, '_blank');
                            }
                        }}
                    >
                        <img
                            className='h-10'
                            src={image.src}
                            alt={image.label || ''}
                        />
                    </motion.div>
                ))}
            </HorizontalTicker>
        </motion.div>
    );
};

export default InfiniteBanner;
