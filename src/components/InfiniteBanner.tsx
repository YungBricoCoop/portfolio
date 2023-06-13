// components
import { HorizontalTicker } from 'react-infinite-ticker';

// animations
import { motion } from 'framer-motion';

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
        'w-24 md:w-64 h-24 mx-2 flex items-center justify-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-5 transition-all duration-500 cursor-pointer';

    const animation = {
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
            className='ticker my-8 mt-0'
            initial='offscreen'
            whileInView='onscreen'
            variants={animation}
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
