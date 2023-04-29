// components
import { HorizontalTicker } from 'react-infinite-ticker';

// animations
import { motion } from 'framer-motion';

// interfaces
interface InfiniteBannerProps {
	title?: string;
	icon?: string;
    images: { src: string; label?: string; link?: string }[];
    speed?: number;
    reverse?: boolean;
}

const InfiniteBanner: React.FC<InfiniteBannerProps> = ({
    title,
	icon,
    images,
    speed = 1,
    reverse = false,
}) => {
    const containerClass =
        'w-24 md:w-64 h-24 mx-2 flex items-center justify-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-5 transition-all duration-500 cursor-pointer';

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
            {title && (
                <div className='flex gap-2 justify-center items-center text-3xl font-bold text-center mt-8 mb-4 text-white'>
                    {icon && <i className={`fas fa-${icon}`}></i>}
                    {title}
                </div>
            )}
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
